import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const ogSize = { width: 1200, height: 630 }

type OgCardProps = {
  // Shell command shown above the headline, matching the site's prompt-style headings.
  command: string
  headline: string
  detail: string
  footer: string
}

// One card design for every share preview: the home page and each project.
export async function renderOgCard({ command, headline, detail, footer }: OgCardProps) {
  const fontDir = join(process.cwd(), 'src/app/font')
  const [montreal, supply, jetbrainsMono] = await Promise.all([
    readFile(join(fontDir, 'NeueMontreal-Regular.otf')),
    readFile(join(fontDir, 'Supply-Regular.otf')),
    readFile(join(fontDir, 'JetBrainsMono-Regular.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: '#000',
          backgroundImage:
            'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.14), rgba(0,0,0,0) 55%)',
          color: '#fff',
          fontFamily: 'Montreal',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'Supply', fontSize: 40, letterSpacing: -2 }}>SHIVA</div>
          {site.openToWork && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'JetBrains Mono',
                fontSize: 22,
                padding: '12px 22px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.22)',
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  backgroundColor: '#14f195',
                  marginRight: 12,
                }}
              />
              open to work
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontFamily: 'JetBrains Mono', fontSize: 26, marginBottom: 22 }}>
            <div style={{ color: '#14f195', marginRight: 14 }}>$</div>
            {command}
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -3 }}>{headline}</div>
          <div
            style={{
              marginTop: 22,
              fontSize: 38,
              lineHeight: 1.18,
              letterSpacing: -1,
              color: '#999',
              maxWidth: 960,
            }}
          >
            {detail}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 26,
            borderTop: '1px solid rgba(255,255,255,0.16)',
            fontFamily: 'JetBrains Mono',
            fontSize: 22,
            color: '#999',
          }}
        >
          <div style={{ color: '#fff' }}>{site.url.replace(/^https?:\/\/(www\.)?/, '')}</div>
          <div>{footer}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Montreal', data: montreal, weight: 400, style: 'normal' },
        { name: 'Supply', data: supply, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: jetbrainsMono, weight: 400, style: 'normal' },
      ],
    },
  )
}
