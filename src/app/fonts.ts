import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const montreal = localFont({
  src: './font/NeueMontreal-Regular.otf',
  weight: '400',
  display: 'swap',
  variable: '--font-montreal',
})

// Hero name and description. Sets --font-geist-sans to "GeistSans", "GeistSans Fallback".
export { GeistSans } from 'geist/font/sans'

// All terminal-style text: prompts, checks, dates, tags, the dock label and project titles.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

// The SHIVA wordmark only.
export const supply = localFont({
  src: './font/Supply-Regular.otf',
  weight: '400',
  display: 'swap',
  variable: '--font-supply',
})
