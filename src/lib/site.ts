// Everything a visitor needs to reach you lives here, so it only changes in one place.
export const site = {
  name: 'Shiva Seth',
  role: 'Full-Stack Solana Engineer',
  // One line under the name in the hero. Keep it short: it has to fit on one line on a phone.
  tagline: 'Solana Engineer · Rust · TypeScript',
  // Must be the domain that serves the site directly (the primary domain in Vercel), not one that
  // redirects. Link previews on X fail when the shared address needs more than one redirect.
  url: 'https://shiva66.xyz',
  title: 'Shiva Seth | Full-Stack Solana Engineer',
  description:
    'Shiva Seth is a full-stack Solana engineer building Rust smart contracts, real-time indexers and the apps on top. 4 hackathon wins. Open to work.',
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

// The four ways to reach you, in the order they appear in the hero, the dock and the footer.
export const contacts = [
  { key: 'x', label: 'X', href: site.x.url },
  { key: 'email', label: 'Email', href: `mailto:${site.email}` },
  { key: 'resume', label: 'Resume', href: site.resume },
  { key: 'github', label: 'GitHub', href: site.github.url },
] as const

export const experience = [
  {
    company: 'GlympseDotFun',
    line: 'Product engineering and Solana protocol development',
    period: 'Aug – Nov 2025',
    logo: '/glympse.png',
    href: 'https://x.com/glympsedotfun',
  },
  {
    company: 'Send Arcade',
    line: 'Built on-chain Wordle, Chess and The Squad Game',
    period: 'Feb – Apr 2025',
    logo: '/sendarcade.png',
    href: 'https://www.sendarcade.fun',
  },
  {
    company: 'Superteam India',
    line: 'Member, with a $3,000 Solana Foundation grant',
    period: 'Jan 2025 – Present',
    logo: '/STINDIA.jpg',
    href: 'https://superteam.fun',
  },
  {
    company: 'Freelance',
    line: 'Solana programs and dApps for clients on Superteam Earn and Gibwork',
    period: 'Jul 2024 – Present',
    logo: '/earn.jpg',
    href: 'https://earn.superteam.fun/t/shiva7343/',
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
  'Rust',
  'Anchor',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Helius gRPC',
  'Jito',
  'Jupiter',
]
