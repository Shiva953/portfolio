import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Contact } from '@/components/contact'
import { ContactDock } from '@/components/contact-dock'
import { ContactIcons } from '@/components/contact-links'
import { ProjectPreview } from '@/components/demo-video'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Backdrop, Prompt } from '@/components/terminal'
import { featuredProjects, projects, sideProjects } from '@/lib/projects'
import { experience, openSource, proof, site, stack } from '@/lib/site'

// Everything that doesn't get a card: one sentence of links under the grid.
const alsoBuilt = [
  ...projects
    .filter((project) => !project.featured)
    .map((project) => ({ name: project.name, href: `/projects/${project.slug}`, external: false })),
  ...sideProjects.map((project) => ({ name: project.name, href: project.href, external: true })),
]

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Copy is written in sentence case; the lowercase voice is this one class. */}
      <main className="lowercase">
        <section className="shell pb-12 pt-10 sm:pb-14 sm:pt-14">
          {/* The page opens like a shell session: the command types itself, then the answer prints. */}
          <p aria-hidden className="font-mono text-[15px] leading-6 text-white">
            <span className="text-live">$</span> <span className="typed">whoami</span>
            <span className="cursor" />
          </p>

          {/* One heading for search engines, two sizes for people: the name, then what he does. */}
          <h1 className="rise mt-5 font-display" style={{ '--i': 5 } as React.CSSProperties}>
            <span className="block text-[clamp(3rem,2rem+4vw,4.5rem)] font-bold leading-none tracking-[-0.02em]">
              I’m Shiva.
            </span>{' '}
            <span className="mt-5 block text-[clamp(1.375rem,1.1rem+1vw,1.75rem)] leading-[1.22] tracking-[-0.02em]">
              <span className="block text-balance">I build Solana products end to end.</span>{' '}
              <span className="block text-pretty text-muted">
                Rust smart contracts, <span className="whitespace-nowrap">real-time</span> indexers,
                and the apps on top.
              </span>
            </span>
          </h1>

          <ul
            className="rise mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-white/90"
            style={{ '--i': 6 } as React.CSSProperties}
          >
            {proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-live" strokeWidth={3} aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="rise mt-6" style={{ '--i': 7 } as React.CSSProperties}>
            <ContactIcons />
          </div>
        </section>

        <section id="experience" className="shell py-8">
          <h2 className="section-title">
            <Prompt command="ls">Experience</Prompt>
          </h2>
          <ul className="mt-3">
            {experience.map((job) => (
              <li key={job.company}>
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-start gap-4 py-3 sm:items-center"
                >
                  <Image
                    src={job.logo}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1 sm:flex sm:items-baseline sm:gap-3">
                    <p className="text-[17px] leading-6 text-white underline-offset-4 group-hover:underline">
                      {job.company}
                    </p>
                    <p className="text-[15px] leading-snug text-muted">{job.line}</p>
                    <p className="mt-1 font-mono text-xs text-faint sm:ml-auto sm:mt-0 sm:shrink-0">
                      {job.period}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="shell py-8">
          <h2 className="section-title">
            <Prompt command="ls">Work</Prompt>
          </h2>
          <ul className="mt-6 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  {/* Each project sits in a terminal window; the path in its title bar is decoration. */}
                  <div className="overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-200 group-hover:border-white/40">
                    <div
                      aria-hidden
                      className="flex h-8 items-center gap-2.5 border-b border-line px-3 font-mono text-xs text-faint"
                    >
                      <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      </span>
                      <span className="truncate">~/{project.slug}</span>
                    </div>
                    <div className="relative aspect-video">
                      <ProjectPreview
                        name={project.name}
                        media={project.media}
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                  {/* Only the name uses the blended Roboto Mono + Neue Montreal font. */}
                  <div className="mt-3.5 flex items-baseline justify-between gap-3">
                    <h3 className="blend text-[19px] font-semibold leading-6 text-white underline-offset-4 group-hover:underline">
                      {project.name}
                    </h3>
                    <span className="font-roboto text-xs text-faint">{project.year}</span>
                  </div>
                  <p className="mt-1.5 text-pretty text-[15px] leading-snug text-muted">
                    {project.tagline}
                  </p>
                  {project.award && (
                    <p className="mt-2 flex items-center gap-2 font-mono text-[13px] text-white">
                      <Check className="h-3.5 w-3.5 shrink-0 text-live" strokeWidth={3} aria-hidden />
                      {project.award.label}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Names sit in code-style tags, so they need no commas between them. */}
          <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] text-muted">
            Also built
            {alsoBuilt.map((build) =>
              build.external ? (
                <a
                  key={build.name}
                  href={build.href}
                  target="_blank"
                  rel="noopener"
                  className="code-link"
                >
                  {build.name}
                </a>
              ) : (
                <Link key={build.name} href={build.href} className="code-link">
                  {build.name}
                </Link>
              ),
            )}
            <span>and more on</span>
            <a
              href={`${site.github.url}?tab=repositories`}
              target="_blank"
              rel="noopener"
              className="code-link"
            >
              GitHub
            </a>
          </p>
        </section>

        <section id="open-source" className="shell grid gap-8 py-8 sm:grid-cols-2 sm:gap-12">
          <div>
            <h2 className="section-title">
              <Prompt command="ls">Open-source</Prompt>
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] text-muted">
              Merged pull requests in
              {openSource.map((pr) => (
                <a
                  key={pr.repo}
                  href={pr.href}
                  target="_blank"
                  rel="noopener"
                  className="code-link"
                >
                  {pr.repo}
                </a>
              ))}
            </p>
          </div>
          <div>
            <h2 className="section-title">
              <Prompt command="cat">Stack</Prompt>
            </h2>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {stack.map((tool) => (
                <li key={tool} className="chip">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>

      <SiteFooter />
      <ContactDock />
      <Backdrop />
    </>
  )
}
