import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="shell flex items-center justify-between pb-28 font-mono text-xs lowercase text-faint">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p aria-hidden>exit 0</p>
    </footer>
  )
}
