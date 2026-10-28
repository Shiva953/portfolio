import { Shortcuts } from '@/components/shortcuts'
import { shortcuts } from '@/lib/shortcuts'
import { ThemeToggle } from '@/components/theme-toggle'

// Section links with their keyboard keys, and the theme toggle. No bar, no border: the nav
// sits on the page like the first line of it. Key hints and "open source" show from sm up.
export function SiteHeader() {
  return (
    <header className="shell flex h-16 items-center justify-between pt-6 sm:pt-8">
      <nav aria-label="Sections" className="-ml-1 flex items-center gap-1 text-[16px]">
        {shortcuts.map((item) => (
          <a
            key={item.key}
            href={item.href}
            aria-keyshortcuts={item.key}
            className={`flex items-baseline gap-1.5 rounded-md px-1 py-1 text-muted transition-colors duration-150 hover:text-fg sm:mr-2 ${
              item.key === 'o' ? 'hidden sm:flex' : ''
            }`}
          >
            <span aria-hidden className="hidden font-mono text-[13px] text-faint sm:inline">
              [{item.key}]
            </span>
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
      <Shortcuts />
    </header>
  )
}
