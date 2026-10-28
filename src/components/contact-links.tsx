import { CalendarDays, FileText, Mail } from 'lucide-react'
import { ArrowUpRightIcon, GithubIcon, XIcon } from '@/components/icons'
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

// Shared hover behaviour for text links: the label underlines and the arrow fades in.
// Hover is limited to larger screens so the effect never sticks after a tap on a phone.
export const arrowLink =
  'group flex items-center no-underline underline-offset-4 transition-colors duration-150 ease-out md:hover:underline focus-visible:underline'
export const arrowLinkArrow =
  'h-[1em] w-[1em] shrink-0 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100 group-focus-visible:opacity-100'

// X, email, resume and GitHub as icon-and-label links. Used in the hero and the contact section.
export function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {site.bookCallUrl && (
        <a
          href={site.bookCallUrl}
          target="_blank"
          rel="noopener"
          className="pill border-fg bg-fg text-bg hover:bg-fg/80"
        >
          <CalendarDays className="h-4 w-4" aria-hidden />
          Book a call
        </a>
      )}
      <ul className="flex w-fit flex-wrap items-center gap-2 tracking-tight">
        {contacts.map((contact) => {
          const Icon = contactIcons[contact.key]
          return (
            <li key={contact.key}>
              <a
                href={contact.href}
                {...linkTarget(contact.key)}
                className={`${arrowLink} text-base text-fg/[0.86] md:hover:text-fg`}
              >
                <Icon className="mr-1.5 h-4 w-4 shrink-0" aria-hidden />
                <span className="text-[16px] font-[450]">{contact.label}</span>
                <ArrowUpRightIcon className={arrowLinkArrow} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
