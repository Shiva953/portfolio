import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="shell flex min-h-[60vh] flex-col items-start justify-center lowercase">
        <p className="font-mono text-[13px] text-faint">404</p>
        <h1 className="mt-4 text-[clamp(1.75rem,5vw,2.25rem)] font-medium leading-tight tracking-[-0.03em]">
          This page doesn’t exist.
        </h1>
        <p className="mt-2 text-[15px] text-muted">The link may be old. Everything I’ve built is on the home page.</p>
        <Link href="/" className="btn btn-primary mt-8">
          Go to the home page
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
