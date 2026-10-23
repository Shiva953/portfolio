import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Contact } from '@/components/contact'
import { ContactDock } from '@/components/contact-dock'
import { ContactLinks, arrowLink, arrowLinkArrow } from '@/components/contact-links'
import { ProjectPreview } from '@/components/demo-video'
import { ArrowUpRightIcon } from '@/components/icons'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Prompt } from '@/components/terminal'
import { featuredProjects, projects, sideProjects } from '@/lib/projects'
import { experience, openSource, site, stack } from '@/lib/site'

// Everything that doesn't get a card: one sentence of links under the grid.
const alsoBuilt = [
  ...projects
    .filter((project) => !project.featured)
    .map((project) => ({ name: project.name, href: `/projects/${project.slug}`, external: false })),
  ...sideProjects.map((project) => ({ name: project.name, href: project.href, external: true })),
]

// Keeps a hyphenated word on one line.
function NoBreak({ children }: { children: React.ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Copy is written in sentence case; the lowercase voice is this one class. */}
      <main className="lowercase">
        <section className="shell pb-10 pt-8 sm:pt-12">
          {/* The page opens like a shell session: the command types itself, then the answer prints. */}
          <p aria-hidden className="font-mono text-[15px] leading-6 text-fg">
            <span className="text-live">$</span> <span className="typed">whoami</span>
            <span className="cursor" />
          </p>

          {/* Picture and name are both sized in em off this row's font size, so they scale together.
              Inside the picture's height: a margin, the name, a gap, the tagline and the same
              margin again. The tagline keeps its size, so the name is the part that gives way. */}
          <div
            className="rise mt-5 flex items-stretch gap-[0.22em] text-[clamp(3rem,2rem+4vw,4.5rem)]"
            style={{ '--i': 5 } as React.CSSProperties}
          >
            <Image
              src="/pfp.png"
              alt=""
              width={768}
              height={768}
              unoptimized
              loading="eager"
              className="h-[0.9em] w-[0.9em] shrink-0 rounded-[0.2em]"
            />
            <div className="flex min-w-0 flex-col justify-between py-[0.05em]">
              <h1 className="trim-display font-display text-[0.61em] font-bold normal-case tracking-[-0.05em]">
                Shiva
              </h1>
              <p className="trim-mono ml-[0.13em] whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-fg/80 sm:text-[11px]">
                {site.tagline}
              </p>
            </div>
          </div>

          {/* What he does, what he has shipped and the proof, in one short paragraph.
              Body copy at 72% of the text colour; the three proof points at full strength. */}
          <p
            className="rise mt-7 text-pretty text-[14.5px] normal-case leading-[1.7] tracking-[-0.015em] text-fg/[0.72] sm:text-[15.5px] sm:leading-[1.7]"
            style={{ '--i': 6 } as React.CSSProperties}
          >
            Full-stack Solana engineer. I write smart contracts in Rust and Anchor, build{' '}
            <NoBreak>real-time</NoBreak> indexers, and ship the apps on top. So far that’s{' '}
            <NoBreak>on-chain</NoBreak> games, escrow protocols, AI agents and blinks, plus{' '}
            <span className="text-fg">4{'\u00a0'}hackathon wins</span>,{' '}
            <span className="text-fg">a Solana Foundation grant</span> and{' '}
            <span className="text-fg">code merged into Anchor</span>.{' '}
            <NoBreak>Self-taught</NoBreak>, and I nerd out on cryptography and the math behind DeFi.
          </p>

          <div className="rise mt-6" style={{ '--i': 7 } as React.CSSProperties}>
            <ContactLinks />
          </div>
        </section>

        <section id="experience" className="shell py-8">
          <h2 className="section-title">
            <Prompt command="ls">Experience</Prompt>
          </h2>
          <ul className="mt-6 space-y-7">
            {experience.map((job) => (
              <li key={job.company} className="flex gap-4">
                <Image
                  src={job.logo}
                  alt=""
                  width={36}
                  height={36}
                  className="mt-0.5 h-9 w-9 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  {/* Company and role on one line, dates pushed to the right edge. The arrow that
                      fades in on hover already holds a gap between the name and the role. */}
                  <div className="flex flex-wrap items-baseline gap-x-1 tracking-tight">
                    <h3 className="text-base font-semibold text-fg">
                      <a href={job.href} target="_blank" rel="noopener" className={arrowLink}>
                        {job.company}
                        <ArrowUpRightIcon className={arrowLinkArrow} />
                      </a>
                    </h3>
                    <p className="text-sm text-fg/70">{job.role}</p>
                    <p className="w-full font-mono text-xs tracking-normal text-faint sm:ml-auto sm:w-auto">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1.5 text-pretty text-[15px] normal-case leading-[1.6] text-muted">
                    {job.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="shell py-8">
          <h2 className="section-title">
            <Prompt command="ls">Work</Prompt>
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  {/* Each project sits in a terminal window; the path in its title bar is decoration. */}
                  <div className="overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-200 group-hover:border-fg/40">
                    <div
                      aria-hidden
                      className="flex h-8 items-center gap-2.5 border-b border-line px-3 font-mono text-xs text-faint"
                    >
                      <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
                      </span>
                      <span className="truncate">~/{project.slug}</span>
                    </div>
                    <div className="relative aspect-video">
                      <ProjectPreview
                        name={project.name}
                        media={project.media}
                        sizes="(min-width: 640px) 320px, 100vw"
                      />
                    </div>
                  </div>
                  {/* Title and year in JetBrains Mono; the description stays in the body font. */}
                  <div className="mt-3.5 flex items-baseline justify-between gap-3">
                    <h3 className="project-title text-[19px] font-semibold leading-6 text-fg underline-offset-4 group-hover:underline">
                      {project.name}
                    </h3>
                    <span className="font-mono text-xs text-faint">{project.year}</span>
                  </div>
                  <p className="mt-1.5 text-pretty text-[15px] leading-snug text-muted">
                    {project.tagline}
                  </p>
                  {project.award && (
                    <p className="mt-2 flex items-center gap-2 font-mono text-[13px] text-fg">
                      <Check className="h-3.5 w-3.5 shrink-0 text-live" strokeWidth={3} aria-hidden />
                      {project.award.label}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Names sit in code-style tags, so they need no commas between them. */}
          <p className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] text-muted">
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
            <span className="flex items-center gap-x-2 whitespace-nowrap">
              and more on
              <a
                href={`${site.github.url}?tab=repositories`}
                target="_blank"
                rel="noopener"
                className="code-link"
              >
                GitHub
              </a>
            </span>
          </p>
        </section>

        <section id="open-source" className="shell space-y-9 py-8">
          <div>
            <h2 className="section-title">
              <Prompt command="ls">Open-source</Prompt>
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] text-muted">
              <span className="normal-case">Merged PRs in</span>
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
    </>
  )
}
