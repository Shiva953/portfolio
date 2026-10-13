import { ogSize, renderOgCard } from '@/lib/og'
import { site } from '@/lib/site'

export const alt = site.title
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgCard({
    command: 'whoami',
    headline: site.share.headline,
    detail: site.share.detail,
    footer: site.share.footer,
  })
}
