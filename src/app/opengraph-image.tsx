import { ogSize, renderOgCard } from '@/lib/og'
import { site } from '@/lib/site'

export const alt = site.title
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgCard({
    title: 'Shiva',
    avatar: true,
    detail: site.share.detail,
    // Left column top to bottom, then the right. Belzin sits fully in view.
    shots: ['bountyexchange', 'traderdraft', 'belzin', 'univault', 'gibbon', 'gorclash'],
  })
}
