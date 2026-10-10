export type Media =
  | {
      kind: 'video'
      // Full walkthrough, shown with controls on the case study page.
      src: string
      // Short silent loop for the card on the home page.
      preview: string
      poster: string
      width: number
      height: number
    }
  | { kind: 'image'; src: string; width: number; height: number }

export type Project = {
  slug: string
  name: string
  year: string
  tagline: string
  summary: string
  award?: { label: string; href?: string }
  built: string[]
  stack: string[]
  links: { label: string; href: string }[]
  media: Media
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'belzin',
    name: 'Belzin',
    year: '2025',
    tagline: 'P2P betting inside a group chat, run by an AI agent.',
    summary:
      'Friends create and settle wagers without leaving the chat. An AI agent turns a message into an on-chain bet, and everyone else joins through a Solana blink.',
    award: { label: '$3,000 Solana Foundation grant' },
    built: [
      'AI agent on Solana Agent Kit and Langchain that creates wagers from a chat prompt',
      'Custom Anchor betting program, with bets placed through blinks',
      'Real-time chat on Next.js and Pusher, backed by Node and Postgres',
    ],
    stack: ['Rust', 'Anchor', 'Next.js', 'Langchain', 'Solana Agent Kit', 'Pusher', 'Postgres'],
    links: [
      { label: 'Live', href: 'https://belzin.vercel.app' },
      { label: 'Source', href: 'https://github.com/Shiva953/Belzin' },
      { label: 'Program', href: 'https://github.com/Shiva953/Belzin-Programs' },
    ],
    media: { kind: 'image', src: '/belzin.png', width: 2031, height: 1354 },
    featured: true,
  },
  {
    slug: 'bountyexchange',
    name: 'BountyExchange',
    year: '2026',
    tagline: 'Trustless USDC bounties for Solana trading volume.',
    summary:
      'A sponsor locks USDC in escrow against a trader’s wallet. The trader is paid on-chain once the volume and hold targets are met, and the sponsor is refunded if they are not.',
    built: [
      'Anchor program for USDC escrow, the deal lifecycle and crank-based finalization',
      'Swap tracking on Helius webhooks, with volume cached in Redis',
      'Next.js app on Postgres, plus a Telegram bot for live deal alerts',
    ],
    stack: ['Rust', 'Anchor', 'Next.js', 'Postgres', 'Redis', 'Helius'],
    links: [
      { label: 'Source', href: 'https://github.com/Shiva953/BountyExchange' },
      { label: 'Program', href: 'https://github.com/Shiva953/bounty-exchange-program' },
    ],
    media: {
      kind: 'video',
      src: '/demos/bountyexchange.mp4',
      preview: '/demos/previews/bountyexchange.mp4',
      poster: '/posters/bountyexchange.jpg',
      width: 1920,
      height: 1080,
    },
    featured: true,
  },
  {
    slug: 'traderdraft',
    name: 'TraderDraft',
    year: '2025',
    tagline: 'A fantasy-style game where top Solana traders become tradable tokens.',
    summary:
      'TraderDraft turns real on-chain trading performance into a competition. Every top trader gets an SPL token, players collect them in packs, and scores follow each trader’s real PnL.',
    built: [
      'Anchor program that mints an SPL token for every trader',
      'A Meteora DAMMv2 liquidity pool behind each token',
      'Leaderboard scraping, daily on-chain snapshots and PnL scoring',
    ],
    stack: ['Rust', 'Anchor', 'Next.js', 'Prisma', 'Postgres', 'Meteora', 'Privy'],
    links: [
      { label: 'Live', href: 'https://traderdraft.vercel.app' },
      { label: 'Source', href: 'https://github.com/Shiva953/TraderDraft' },
    ],
    media: {
      kind: 'video',
      src: '/demos/traderdraft.mp4',
      preview: '/demos/previews/traderdraft.mp4',
      poster: '/posters/traderdraft.jpg',
      width: 1600,
      height: 828,
    },
    featured: true,
  },
  {
    slug: 'gorclash',
    name: 'Gorclash',
    year: '2025',
    tagline: 'A multiplayer arcade game where every hit is a transaction.',
    summary:
      'A real-time arena game on Gorbagana, a Solana L2. Players collect tokens and dodge obstacles, and every reward and penalty settles on-chain while the round is still running.',
    built: [
      'Anchor program for rounds, rewards, penalties and withdrawals',
      'Real-time multiplayer server with lobbies and matchmaking',
      'Phaser 3 game client in Next.js, with an in-game wallet per player',
    ],
    stack: ['Rust', 'Anchor', 'Phaser 3', 'Next.js', 'Prisma'],
    links: [
      { label: 'Source', href: 'https://github.com/Shiva953/Gorclash' },
      { label: 'Program', href: 'https://github.com/Shiva953/gorclash-programs' },
    ],
    media: {
      kind: 'video',
      src: '/demos/gorclash.mp4',
      preview: '/demos/previews/gorclash.mp4',
      poster: '/posters/gorclash.jpg',
      width: 1600,
      height: 970,
    },
    featured: true,
  },
  {
    slug: 'gibbon',
    name: 'Gibbon',
    year: '2026',
    tagline: 'Terraform-style plan and apply for Gibwork bounties.',
    summary:
      'Bounties as code for open source maintainers. Keep the whole backlog in one YAML file, preview every change before money moves, and never pay for the same bounty twice.',
    built: [
      'Plan, apply, import and status commands on the Gibwork SDK',
      'Crash-safe payments, with state written to disk before any money moves',
      '100 automated tests, with JSON output for CI',
    ],
    stack: ['TypeScript', 'Node.js', 'Gibwork SDK'],
    links: [
      { label: 'Live', href: 'https://gibbon-cli.vercel.app' },
      { label: 'Source', href: 'https://github.com/Shiva953/gibbon' },
    ],
    media: {
      kind: 'video',
      src: '/demos/gibbon.mp4',
      preview: '/demos/previews/gibbon.mp4',
      poster: '/posters/gibbon.jpg',
      width: 1920,
      height: 1080,
    },
    featured: true,
  },
  {
    slug: 'univault',
    name: 'Univault',
    year: '2024',
    tagline: 'Run a Squads multisig from a single blink.',
    summary:
      'View a Squads vault, send transactions and vote on them without opening an app. Everything is chained inside one Solana blink.',
    award: {
      label: 'Blinkathon winner, Squads track',
      href: 'https://x.com/thesendcoin/status/1839324398102409634',
    },
    built: [
      'Vault view with balance, members and approval threshold',
      'Send, vote on and execute vault transactions',
      'Action chaining, so the whole flow stays inside one blink',
    ],
    stack: ['TypeScript', 'Next.js', 'Solana Actions', 'Squads'],
    links: [{ label: 'Source', href: 'https://github.com/Shiva953/Univault' }],
    media: { kind: 'image', src: '/univault.png', width: 1258, height: 730 },
    featured: true,
  },
  {
    slug: 'openvest',
    name: 'OpenVest',
    year: '2024',
    tagline: 'Token vesting for teams, with cliffs and linear unlocks.',
    summary:
      'A company locks its token supply in a vault and sets a vesting schedule for each employee. Tokens unlock linearly after the cliff and employees claim them from a dashboard.',
    built: [
      'Anchor program with cliff periods and linear vesting',
      'Company treasury held in escrow accounts',
      'Dashboard for creating schedules and claiming unlocked tokens',
    ],
    stack: ['Rust', 'Anchor', 'Next.js', 'TypeScript'],
    links: [
      { label: 'Live', href: 'https://openvest.vercel.app' },
      { label: 'Source', href: 'https://github.com/Shiva953/OpenVest' },
    ],
    media: { kind: 'image', src: '/openvest.png', width: 2790, height: 1746 },
    featured: false,
  },
  {
    slug: 'liquotic',
    name: 'Liquotic',
    year: '2024',
    tagline: 'Buy NFTs with any SPL token, not just SOL.',
    summary:
      'Pick any token on the Jupiter list and pay for an NFT with it. Jupiter swaps the token to SOL and the Magic Eden API completes the purchase in the same flow.',
    built: [
      'Jupiter swap from any listed SPL token into SOL',
      'NFT purchase through the Magic Eden API',
      'Listings shareable as Solana blinks',
    ],
    stack: ['TypeScript', 'Next.js', 'Jupiter API', 'Magic Eden API', 'Prisma', 'Postgres'],
    links: [{ label: 'Source', href: 'https://github.com/Shiva953/Liquotic' }],
    media: { kind: 'image', src: '/liquotic.jpg', width: 2856, height: 1746 },
    featured: false,
  },
]

// Smaller builds that don't need a page of their own.
export const sideProjects = [
  {
    name: 'sol-clix',
    tagline: 'A minimal Solana CLI wallet, written in Rust.',
    href: 'https://github.com/Shiva953/sol-clix',
  },
  {
    name: 'PicoVault',
    tagline: 'A Redis-like key-value store in Rust.',
    href: 'https://github.com/Shiva953/PicoVault',
  },
  {
    name: 'ecdsa-rust',
    tagline: 'ECDSA message signing and verification in Rust.',
    href: 'https://github.com/Shiva953/ecdsa-rust',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
