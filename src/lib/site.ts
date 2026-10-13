// Everything a visitor needs to reach you lives here, so it only changes in one place.
export const site = {
  name: 'Shiva Seth',
  role: 'Product Engineer',
  // One line under the name in the hero. Keep it short: it has to fit on one line on a phone.
  tagline: 'Engineer · Builder',
  // Must be the domain that serves the site directly (the primary domain in Vercel), not one that
  // redirects. Link previews on X fail when the shared address needs more than one redirect.
  url: 'https://shiva66.xyz',
  // The browser tab, the search listing and the text beside a link preview all use these two.
  title: 'Shiva Seth | Product Engineer',
  description:
    'Shiva Seth is a product engineer who ships end to end, from smart contracts and AI agents to the apps on top. 4 hackathon wins. Open to work.',
  // The text on the link preview image (X, LinkedIn, Slack and the like). The footer names what
  // any hiring team might be looking for, so keep it free of ecosystem-specific credentials.
  share: {
    headline: 'Product engineer.',
    detail: 'Smart contracts, AI agents, and the apps on top.',
    footer: 'full-stack / builds with AI / consumer apps / 4 hackathon wins',
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

// Projects with a merged pull request, each linking to the PR itself.
export const openSource = [
  { repo: 'Anchor', href: 'https://github.com/otter-sec/anchor/pull/2752' },
  { repo: 'discord.js', href: 'https://github.com/discordjs/discord.js/pull/9345' },
  { repo: 'Lucide', href: 'https://github.com/lucide-icons/lucide/pull/1220' },
  {
    repo: 'Meshery',
    href: 'https://github.com/meshery/meshery/pulls?q=is%3Apr+author%3AShiva953+is%3Amerged',
  },
  { repo: 'Superteam Earn', href: 'https://github.com/SuperteamDAO/earn/pull/437' },
  { repo: 'AsyncAPI', href: 'https://github.com/asyncapi/cli/pull/1033' },
]

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
