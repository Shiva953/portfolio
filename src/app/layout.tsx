import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Toaster } from 'sonner'
import { site } from '@/lib/site'
import { GeistSans, jetbrainsMono, montreal, supply } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Shiva Seth',
    'Solana engineer',
    'Solana developer',
    'full-stack Solana engineer',
    'Rust developer',
    'Anchor framework',
    'smart contract developer',
    'blockchain developer',
    'web3 engineer',
    'Superteam India',
    'Neutron975',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    creator: `@${site.x.handle}`,
    site: `@${site.x.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

// Tells search engines who this site is about and which profiles belong to the same person.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: site.x.handle,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  sameAs: [site.github.url, site.x.url, site.earn.url],
  knowsAbout: [
    'Solana',
    'Rust',
    'Anchor',
    'TypeScript',
    'Smart contracts',
    'Next.js',
    'On-chain data indexing',
  ],
  memberOf: { '@type': 'Organization', name: 'Superteam India', url: 'https://superteam.fun' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montreal.variable} ${supply.variable} ${GeistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-black font-sans antialiased">
        {children}
        <Toaster theme="dark" position="top-center" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
