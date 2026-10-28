import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Every face the variants draw on. globals.css maps them onto the display, body and meta roles.

// Sets --font-geist-sans and --font-geist-mono.
export { GeistSans } from 'geist/font/sans'
export { GeistMono } from 'geist/font/mono'

export const satoshi = localFont({
  src: './font/Satoshi-Variable.woff2',
  weight: '300 900',
  display: 'swap',
  variable: '--font-satoshi',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})
