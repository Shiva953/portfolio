// Everything a visitor needs to reach you lives here, so it only changes in one place.
export const site = {
  name: 'Shiva Seth',
  role: 'Product Engineer',
  tagline: 'Engineer · Builder',
  // The two meta lines under the name in the hero. Each has to fit on one line on a phone.
  meta: ['engineer', 'builder', 'typescript/rust'],
  location: 'Bangalore',
  // Must be the domain that serves the site directly (the primary domain in Vercel), not one that
  // redirects. Link previews on X fail when the shared address needs more than one redirect.
  url: 'https://shiva66.xyz',
  // The browser tab, the search listing and the text beside a link preview all use these two.
  title: 'Shiva Seth | Product Engineer',
  description:
    'Shiva Seth is a product engineer who ships end to end, from smart contracts and AI agents to the apps on top. 4 hackathon wins. Open to work.',
  // The text on the link preview image (X, LinkedIn, Slack and the like). Written for any team
  // hiring a full-stack or product engineer, so keep it free of ecosystem-specific terms.
  share: {
    detail: 'Full-stack product engineer. I ship crypto and AI apps end to end.',
  },
  email: 'shivaset2@gmail.com',
  resume: '/shiva_seth.pdf',
  // Flip to false once you're hired: it drives the status light, the copy and the OG image.
  openToWork: true,
  // Paste a cal.com or Calendly link here and a "book a call" button appears as the main CTA.
  bookCallUrl: '',
  x: { handle: 'Neutron975', url: 'https://x.com/Neutron975' },
  github: { handle: 'Shiva953', url: 'https://github.com/Shiva953' },
  earn: { handle: 'shiva7343', url: 'https://earn.superteam.fun/t/shiva7343/' },
}

// The four ways to reach you, in the order they appear in the hero, the dock and the contact section.
export const contacts = [
  { key: 'x', label: 'X', href: site.x.url },
  { key: 'email', label: 'Email', href: `mailto:${site.email}` },
  { key: 'resume', label: 'Resume', href: site.resume },
  { key: 'github', label: 'GitHub', href: site.github.url },
] as const

// `summary` is what you actually did there, in a sentence or two.
export const experience = [
  {
    company: 'GlympseDotFun',
    role: 'Product engineering & protocol dev',
    period: 'Aug – Nov 2025',
    logo: '/glympse.png',
    href: 'https://x.com/glympsedotfun',
    summary:
      'Built product features and Solana protocol integrations. Worked directly on smart contract architecture and on-chain game mechanics.',
  },
  {
    company: 'Send Arcade',
    role: 'Software developer',
    period: 'Feb – Apr 2025',
    logo: '/sendarcade.png',
    href: 'https://www.sendarcade.fun',
    summary:
      'Built on-chain games on Solana. Wrote the programs behind fee deposits, token swaps and game logic in Rust and Anchor.',
  },
  {
    company: 'Superteam India',
    role: 'Member',
    period: 'Jan 2025 – Present',
    logo: '/STINDIA.jpg',
    href: 'https://superteam.fun',
    summary:
      'Help members win bounties with hands-on technical support. Received a $3,000 Solana Foundation grant to build Belzin.',
  },
  {
    company: 'Freelance',
    role: 'Solana developer, Superteam Earn & Gibwork',
    period: 'Jul 2024 – Present',
    logo: '/earn.jpg',
    href: 'https://earn.superteam.fun/t/shiva7343/',
    summary:
      'Custom Solana programs and dApps for clients in TypeScript, Rust and Anchor. Built pipelines that index and stream on-chain data in real time with Helius gRPC.',
  },
]

// Merged pull requests. `repos` are the tiles, each linking to Shiva's merged PRs in that repo;
// `highlights` are the rows under them. Counts are from GitHub (merged PRs by Shiva953).
const mergedIn = (repo: string) =>
  `https://github.com/${repo}/pulls?q=is%3Apr+author%3AShiva953+is%3Amerged`

export const openSource = {
  total: 31,
  allHref: 'https://github.com/pulls?q=is%3Apr+author%3AShiva953+is%3Amerged',
  repos: [
    { name: 'zcash', repo: 'zcashlabs/thus-spoke-zakura', avatar: '/oss/zcashlabs.png', merged: 2 },
    { name: 'anchor', repo: 'otter-sec/anchor', avatar: '/oss/otter-sec.png', merged: 1 },
    { name: 'discord.js', repo: 'discordjs/discord.js', avatar: '/oss/discordjs.png', merged: 1 },
    { name: 'meshery', repo: 'meshery/meshery', avatar: '/oss/meshery.png', merged: 3 },
    { name: 'lucide', repo: 'lucide-icons/lucide', avatar: '/oss/lucide-icons.png', merged: 1 },
    { name: 'superteam earn', repo: 'SuperteamDAO/earn', avatar: '/oss/SuperteamDAO.png', merged: 1 },
  ].map((item) => ({ ...item, href: mergedIn(item.repo) })),
  highlights: [
    {
      title: 'feat(cli): add wallet quote command',
      repo: 'zcash',
      number: 303,
      avatar: '/oss/zcashlabs.png',
      href: 'https://github.com/zcashlabs/thus-spoke-zakura/pull/303',
    },
    {
      title: 'ts: add IDL seed types',
      repo: 'anchor',
      number: 2752,
      avatar: '/oss/otter-sec.png',
      href: 'https://github.com/otter-sec/anchor/pull/2752',
    },
    {
      title: 'feat!: return entries instead of values in toJSON',
      repo: 'discord.js',
      number: 9345,
      avatar: '/oss/discordjs.png',
      href: 'https://github.com/discordjs/discord.js/pull/9345',
    },
  ],
}

export const stack = [
  'TypeScript',
  'Rust',
  'Anchor',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Helius gRPC',
  'Jito',
  'Jupiter',
]
