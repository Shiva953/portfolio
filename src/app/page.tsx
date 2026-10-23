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

// The phrases in the intro a skimming reader should catch.
function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-fg">{children}</strong>
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Copy is written in sentence case; the lowercase voice is this one class. */}
      <main className="lowercase">
        <section className="shell pb-10 pt-10 sm:pt-14">
          {/* Photo on the left; the prompt, name and tagline stacked beside it, the way whoami
              answers in a terminal. The open-to-work badge sits at the right edge from sm up;
              on phones the dock carries it. */}
          <div className="rise flex items-center gap-4 sm:gap-5" style={{ '--i': 5 } as React.CSSProperties}>
            <Image
              src="/pfp.png"
              alt=""
              width={768}
              height={768}
              unoptimized
              loading="eager"
              className="h-[84px] w-[84px] shrink-0 rounded-[18px]"
            />
            <div className="min-w-0 flex-1">
              {/* The command types itself, then the answer is already there below it. */}
              <p aria-hidden className="font-mono text-[13px] leading-4 text-muted">
                <span className="text-live">$</span> <span className="typed">whoami</span>
                <span className="cursor" />
              </p>
              {/* The offset was measured from the rendered letters: it centres the name exactly
                  between the prompt above and the tagline below. A transform moves only the name,
                  so the prompt, tagline and photo stay where they are. */}
              <h1 className="mt-1.5 -translate-y-[1.625px] font-mono text-[42px] font-extrabold lowercase leading-none tracking-[-0.09em]">
                Shiva
              </h1>
              <p className="ml-[0.1em] mt-px whitespace-nowrap font-mono text-[12px] font-medium lowercase leading-none tracking-[-0.01em] text-fg/80">
                {site.tagline}
              </p>
            </div>
            {site.openToWork && (
              <p className="status-badge hidden self-start sm:inline-flex">
                <span className="status-dot" aria-hidden />
                open to work
              </p>
            )}
          </div>

          {/* A short spoken-style intro, as if said to a founder in person. Body at 79% of the text colour; key phrases in semibold at full strength. */}
          <p
            className="rise mt-7 text-pretty font-mono text-[13px] normal-case leading-[1.75] tracking-[-0.035em] text-fg/[0.79] sm:text-[14px] sm:leading-[1.75]"
            style={{ '--i': 6 } as React.CSSProperties}
          >
            I’m a <NoBreak>full-stack</NoBreak>, <NoBreak>product-minded</NoBreak> engineer who loves
            taking products from <Strong><NoBreak>0→1</NoBreak></Strong>. For the past two years I’ve been freelancing,{' '}
            <Strong>building MVPs</Strong> for early teams and owning each one{' '}
            <Strong>end to end</Strong>, from the first sketch to launch. These days that’s mostly{' '}
            <Strong>AI agents and apps on Solana</Strong>. I’m <NoBreak>self-taught</NoBreak>, and
            along the way I’ve won a bunch of <Strong>hackathons and bounties</Strong>, and landed a{' '}
            <Strong>Solana Foundation grant</Strong>.
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
