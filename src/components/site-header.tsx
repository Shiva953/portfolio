import Link from 'next/link'
import { site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="shell flex h-16 items-center justify-between">
      <Link
        href="/"
        aria-label={`${site.name}, home`}
        className="font-supply text-[22px] leading-none tracking-tighter"
      >
        SHIVA
      </Link>
      {site.openToWork && (
        <p className="flex items-center gap-2.5 font-mono text-[13px] text-white">
          <span className="status-dot" aria-hidden />
          open to work
        </p>
      )}
    </header>
  )
}
