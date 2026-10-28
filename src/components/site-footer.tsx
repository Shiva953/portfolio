import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="shell flex items-center justify-between pb-28 font-mono text-[14px] lowercase text-faint">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      {/* A hint for the keyboard shortcuts in the nav, for people with a keyboard. */}
      <p aria-hidden className="hidden sm:block">
        press t to switch theme
      </p>
    </footer>
  )
}
