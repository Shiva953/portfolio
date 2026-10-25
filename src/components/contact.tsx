import { ContactLinks } from '@/components/contact-links'
import { CopyEmail } from '@/components/copy-email'
import { Prompt } from '@/components/terminal'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="shell pb-14 pt-4">
      <div data-reveal className="border-t border-line pt-10">
        <p aria-hidden className="font-mono text-[15px] text-fg">
          <Prompt>sudo hire shiva</Prompt>
        </p>
        <h2 className="mt-4 text-[clamp(1.75rem,5vw,2.25rem)] font-medium leading-tight tracking-[-0.03em]">
          Hiring? Let’s talk.
        </h2>
        <p className="mt-1.5 text-base text-muted">Open to full-time and contract roles.</p>
        <div className="mt-5">
          <ContactLinks />
        </div>
        <CopyEmail
          email={site.email}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[13px] text-muted transition-colors hover:text-fg"
        >
          {site.email}
        </CopyEmail>
      </div>
    </section>
  )
}
