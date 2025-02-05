import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Metadata } from 'next'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "Shiva's Portfolio",
  description: "Shiva's Portfolio Website, @Neutron975 on X",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-black min-h-screen font-sans antialiased">
        {children}
        <Toaster position='top-center'/>
        </body>
    </html>
  )
}