import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="shell flex min-h-[60vh] flex-col items-start justify-center lowercase">
        <p className="font-mono text-[13px] text-faint">404</p>
        <h1 className="mt-4 text-[clamp(2.25rem,6vw,3.75rem)] leading-none tracking-[-0.035em]">
          This page doesn’t exist.
        </h1>
        <p className="mt-4 text-lg text-muted">The link may be old. Everything I’ve built is on the home page.</p>
        <Link href="/" className="btn btn-primary mt-8">
          Go to the home page
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
