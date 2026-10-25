import { LocalTime } from '@/components/local-time'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="shell flex items-center justify-between pb-28 font-mono text-[13px] lowercase text-faint">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <LocalTime />
    </footer>
  )
}
