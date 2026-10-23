import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { site } from '@/lib/site'

// Section links, in page order. Absolute so they also work from a project page.
const sections = [
  { href: '/#experience', label: 'experience' },
  { href: '/#work', label: 'work' },
  { href: '/#contact', label: 'contact' },
]

// A slim bar: the profile picture as a logo on the left, section links and the theme toggle on the right,
// and a hairline across the full width underneath.
export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="shell flex h-14 items-center justify-between">
        {/* The profile picture doubles as the logo, same as the browser tab icon. */}
        <Link href="/" aria-label={`${site.name}, home`} className="shrink-0 transition-opacity hover:opacity-80">
          <Image
            src="/pfp.png"
            alt=""
            width={768}
            height={768}
            unoptimized
            loading="eager"
            className="h-7 w-7 rounded-[7px]"
          />
        </Link>
        <nav aria-label="Sections" className="flex items-center gap-4 font-mono text-[13px] sm:gap-5">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-muted transition-colors duration-150 hover:text-fg"
            >
              {section.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
