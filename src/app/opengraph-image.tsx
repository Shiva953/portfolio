import { ogSize, renderOgCard } from '@/lib/og'
import { site } from '@/lib/site'

export const alt = site.title
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgCard({
    command: 'whoami',
    headline: 'Full-stack Solana engineer.',
    detail: 'Rust smart contracts, real-time indexers, and the apps on top.',
    footer: '4 hackathon wins / Solana Foundation grant / merged in Anchor',
  })
}
