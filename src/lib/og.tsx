import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const ogSize = { width: 1200, height: 630 }

type OgCardProps = {
  title: string
  detail: string
  // Shown after the domain at the bottom. Left out on the home card.
  footer?: string
  // Show the profile picture to the left of the title (the home card).
  avatar?: boolean
  // Project slugs whose screenshots fill the right side. One gives a single large shot,
  // more give a two-column collage that runs off the edges.
  shots: string[]
}

const ink = '#0a0a0a'
const muted = '#737373'
const line = '#e5e5e5'

const root = process.cwd()

async function dataUri(path: string, type: string) {
  return `data:${type};base64,${(await readFile(join(root, path))).toString('base64')}`
}

// One card design for every share preview: the home page and each project.
// Light on purpose, so it stands out against the dark timeline on X.
export async function renderOgCard({ title, detail, footer, avatar, shots }: OgCardProps) {
  const fontDir = join(root, 'src/app/font')
  const [manrope, geist, jetbrainsMono, pfp, ...images] = await Promise.all([
    readFile(join(fontDir, 'Manrope-ExtraBold.woff')),
    readFile(join(fontDir, 'Geist-Medium.ttf')),
    readFile(join(fontDir, 'JetBrainsMono-Regular.ttf')),
    dataUri('public/pfp.png', 'image/png'),
    ...shots.map((slug) => dataUri(`src/assets/og/${slug}.jpg`, 'image/jpeg')),
  ])

  // Long project names step down so they stay on one line in the 540px left column.
  const titleSize = Math.min(140, Math.floor(540 / (title.length * 0.6)))

  const shot = (src: string, width: number, height: number) => (
    <div
      key={src.slice(-40)}
      style={{
        display: 'flex',
        width,
        height,
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${line}`,
        boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
        backgroundColor: '#f5f5f5',
      }}
    >
      <img src={src} width={width} height={height} style={{ objectFit: 'cover' }} />
    </div>
  )

  // Collage columns: shots alternate between the two, the second column sits lower.
  const columns = [images.filter((_, i) => i % 2 === 0), images.filter((_, i) => i % 2 === 1)]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#fff',
          color: ink,
          fontFamily: 'Geist',
        }}
      >
        {images.length > 1 ? (
          <div style={{ display: 'flex', position: 'absolute', left: 676, top: -100, gap: 20 }}>
            {columns.map((column, c) => (
              <div
                key={c}
                style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: c === 1 ? 70 : 0 }}
              >
                {column.map((src) => shot(src, 320, 220))}
              </div>
            ))}
          </div>
        ) : (
          images[0] && (
            <div style={{ display: 'flex', position: 'absolute', left: 676, top: 96 }}>
              {shot(images[0], 640, 420)}
            </div>
          )
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 620,
            padding: '64px 0 60px 72px',
          }}
        >
          {site.openToWork ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                fontFamily: 'JetBrains Mono',
                fontSize: 20,
                padding: '10px 20px',
                borderRadius: 999,
                border: `1px solid ${line}`,
                backgroundColor: '#fff',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  backgroundColor: '#16b364',
                  marginRight: 12,
                }}
              />
              open to work
            </div>
          ) : (
            <div style={{ display: 'flex' }} />
          )}

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {avatar && (
                <img
                  src={pfp}
                  width={titleSize * 0.82}
                  height={titleSize * 0.82}
                  style={{ borderRadius: titleSize * 0.2, marginRight: titleSize * 0.2 }}
                />
              )}
              <div
                style={{
                  fontFamily: 'Manrope',
                  fontSize: titleSize,
                  lineHeight: 1,
                  letterSpacing: '-0.06em',
                  marginTop: -titleSize * 0.08,
                }}
              >
                {title}
              </div>
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 34,
                lineHeight: 1.18,
                letterSpacing: '-0.045em',
                color: muted,
                maxWidth: 540,
              }}
            >
              {detail}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'JetBrains Mono',
              fontSize: 20,
              color: muted,
            }}
          >
            <div style={{ color: ink }}>{site.url.replace(/^https?:\/\/(www\.)?/, '')}</div>
            {footer && <div style={{ margin: '0 14px', color: '#c4c4c4' }}>/</div>}
            {footer && <div>{footer}</div>}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Manrope', data: manrope, weight: 800, style: 'normal' },
        { name: 'Geist', data: geist, weight: 500, style: 'normal' },
        { name: 'JetBrains Mono', data: jetbrainsMono, weight: 400, style: 'normal' },
      ],
    },
  )
}
