import { Roboto_Mono, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

export const montreal = localFont({
  src: './font/NeueMontreal-Regular.otf',
  weight: '400',
  display: 'swap',
  variable: '--font-montreal',
})

// Hero name and description. A variable font, so the name gets a real bold weight.
export const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
})

// Roboto Mono supplies the letters and digits of the blended project font.
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

// Neue Montreal again, limited to spaces and punctuation. Listed ahead of Roboto Mono in the
// `blend` family, it takes those characters and leaves letters and digits to Roboto Mono, so the
// two typefaces behave as one font: monospace letterforms with proportional spacing.
export const montrealSpacing = localFont({
  src: './font/NeueMontreal-Regular.otf',
  weight: '100 900',
  display: 'swap',
  variable: '--font-montreal-spacing',
  // The automatic fallback face covers every character and would shadow Roboto Mono.
  adjustFontFallback: false,
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+00A0, U+2010-2027',
    },
  ],
})

export const supply = localFont({
  src: './font/Supply-Regular.otf',
  weight: '400',
  display: 'swap',
  variable: '--font-supply',
})
