import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="shell flex h-16 items-center justify-between">
      {/* Supply ships one weight, so the wordmark's extra weight is drawn as a stroke. */}
      <Link
        href="/"
        aria-label={`${site.name}, home`}
        className="font-supply text-[22px] leading-none tracking-[-0.03em] [-webkit-text-stroke:0.045em_currentColor]"
      >
        SHIVA
      </Link>
      <div className="flex items-center gap-4">
        {site.openToWork && (
          <p className="flex items-center gap-2.5 font-mono text-[13px] text-fg">
            <span className="status-dot" aria-hidden />
            open to work
          </p>
        )}
        <ThemeToggle />
      </div>
    </header>
  )
}
