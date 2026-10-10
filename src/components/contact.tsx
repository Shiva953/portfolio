import { ContactLinks } from '@/components/contact-links'
import { CopyEmail } from '@/components/copy-email'
import { Prompt } from '@/components/terminal'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="shell pb-16 pt-6">
      <div className="border-t border-line pt-12">
        <p aria-hidden className="font-mono text-[15px] text-white">
          <Prompt>sudo hire shiva</Prompt>
        </p>
        <h2 className="mt-5 text-[clamp(2.125rem,6vw,3.25rem)] leading-none tracking-[-0.035em]">
          Hiring? Let’s talk.
        </h2>
        <p className="mt-4 text-[17px] text-muted">Open to full-time and contract roles.</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-5">
          <ContactLinks />
          <CopyEmail
            email={site.email}
            className="inline-flex items-center gap-2 font-mono text-[13px] text-muted transition-colors hover:text-white"
          >
            {site.email}
          </CopyEmail>
        </div>
      </div>
    </section>
  )
}
