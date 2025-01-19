import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Neutron's Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-black min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}