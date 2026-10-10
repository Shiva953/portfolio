import { CalendarDays, FileText, Mail } from 'lucide-react'
import { GithubIcon, XIcon } from '@/components/icons'
import { contacts, site } from '@/lib/site'

export const contactIcons = {
  x: XIcon,
  email: Mail,
  resume: FileText,
  github: GithubIcon,
}

// Email opens the mail app in place; everything else opens in a new tab.
export function linkTarget(key: (typeof contacts)[number]['key']) {
  return key === 'email' ? {} : { target: '_blank', rel: 'noopener' }
}

function BookCall() {
  if (!site.bookCallUrl) return null
  return (
    <a
      href={site.bookCallUrl}
      target="_blank"
      rel="noopener"
      className="pill border-white bg-white text-black hover:bg-white/80"
    >
      <CalendarDays className="h-4 w-4" aria-hidden />
      Book a call
    </a>
  )
}

// Hero: logos only, in white. The labelled version sits at the end of the page.
export function ContactIcons() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <BookCall />
      <ul className="-ml-2 flex items-center gap-1">
        {contacts.map((contact) => {
          const Icon = contactIcons[contact.key]
          return (
            <li key={contact.key}>
              <a
                href={contact.href}
                {...linkTarget(contact.key)}
                aria-label={contact.label}
                title={contact.label}
                className="grid h-10 w-10 place-items-center rounded-full text-white/[0.86] transition-colors duration-200 hover:bg-white hover:text-black"
              >
                <Icon className="h-[22px] w-[22px]" aria-hidden />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// Closing section: logo and label, four equal columns on phones so they sit on one row.
export function ContactLinks() {
  return (
    <ul className="grid grid-cols-4 gap-1.5 sm:flex sm:flex-wrap sm:gap-2.5">
      {site.bookCallUrl && (
        <li className="col-span-4">
          <BookCall />
        </li>
      )}
      {contacts.map((contact) => {
        const Icon = contactIcons[contact.key]
        return (
          <li key={contact.key}>
            <a
              href={contact.href}
              {...linkTarget(contact.key)}
              className="pill w-full gap-1.5 px-0 text-sm sm:w-auto sm:gap-2 sm:px-4 sm:text-[15px]"
            >
              <Icon className="h-4 w-4 opacity-[0.86]" aria-hidden />
              {contact.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
