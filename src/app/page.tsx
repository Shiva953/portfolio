import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Contact } from '@/components/contact'
import { ContactDock } from '@/components/contact-dock'
import { ContactLinks, arrowLink, arrowLinkArrow } from '@/components/contact-links'
import { ProjectPreview } from '@/components/demo-video'
import { ArrowUpRightIcon } from '@/components/icons'
import { LocalTime } from '@/components/local-time'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Prompt } from '@/components/terminal'
import { featuredProjects, projects, sideProjects } from '@/lib/projects'
import { experience, openSource, site, stack } from '@/lib/site'

// Everything that doesn't get a row: one line of links under the list.
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
  return <strong className="font-medium text-fg">{children}</strong>
}

// Stagger index for the page-load sequence.
const order = (i: number) => ({ '--i': i }) as React.CSSProperties

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Copy is written in sentence case; the lowercase voice is this one class. */}
      <main className="lowercase">
        <section className="shell pb-8 pt-10 sm:pt-14">
          {/* Who, what and where in three lines beside the picture: the name, then two quiet
              meta lines a recruiter can scan in a second. */}
          <div className="enter flex items-center gap-4" style={order(0)}>
            <Image
              src="/pfp.png"
              alt=""
              width={768}
              height={768}
              unoptimized
              loading="eager"
              className="img-outline h-[68px] w-[68px] shrink-0 rounded-[15px]"
            />
            <div className="min-w-0">
              <h1 className="name">Shiva</h1>
              {/* The last item drops on phones so the line never truncates. */}
              <p className="mt-1.5 font-mono text-[14px] leading-5 text-muted">
                {site.meta.slice(0, -1).join(' · ')}
                <span className="hidden sm:inline"> · {site.meta.at(-1)}</span>
              </p>
              <p className="flex flex-wrap items-center gap-x-1.5 font-mono text-[14px] leading-5 text-faint">
                <span>{site.location}</span>
                <span aria-hidden>·</span>
                <LocalTime />
                {/* On phones the dock already says this, so the line stays one line. */}
                {site.openToWork && (
                  <span className="hidden items-center gap-1.5 text-muted sm:inline-flex">
                    <span aria-hidden className="text-faint">·</span>
                    <span className="status-dot" aria-hidden />
                    open to work
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* A short spoken-style intro, as if said to a founder in person. */}
          <p
            className="enter mt-8 max-w-[62ch] text-pretty text-[15px] normal-case leading-[1.7] text-fg/80"
            style={order(1)}
          >
            I’m a <NoBreak>full-stack</NoBreak>, <NoBreak>product-minded</NoBreak> engineer who loves
            taking products from{' '}
            <Strong>
              <NoBreak>0→1</NoBreak>
            </Strong>
            . For the past two years I’ve been freelancing, <Strong>building MVPs</Strong> for early
            teams and owning each one <Strong>end to end</Strong>, from the first sketch to launch.
            These days that’s mostly <Strong>AI agents and apps on Solana</Strong>. I’m{' '}
            <NoBreak>self-taught</NoBreak>, and along the way I’ve won a bunch of{' '}
            <Strong>hackathons and bounties</Strong>, and landed a <Strong>Solana Foundation grant</Strong>.
          </p>

          <div className="enter mt-6" style={order(2)}>
            <ContactLinks />
          </div>
        </section>

        <section id="experience" className="shell enter py-10" style={order(3)}>
          <h2 className="section-title">
            <Prompt command="ls">Experience</Prompt>
          </h2>
          <ul className="mt-6 space-y-6">
            {experience.map((job) => (
              <li key={job.company} className="flex gap-4">
                <Image
                  src={job.logo}
                  alt=""
                  width={32}
                  height={32}
                  className="img-outline mt-0.5 h-[34px] w-[34px] shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  {/* Company and role on one line, dates pushed to the right edge. */}
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="font-display text-[16px] font-medium tracking-[-0.01em] text-fg">
                      <a href={job.href} target="_blank" rel="noopener" className={arrowLink}>
                        {job.company}
                        <ArrowUpRightIcon className={arrowLinkArrow} />
                      </a>
                    </h3>
                    <p className="text-[15px] text-muted">{job.role}</p>
                    <p className="w-full font-mono text-[14px] text-faint sm:ml-auto sm:w-auto">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-pretty text-[14px] normal-case leading-[1.6] text-muted">
                    {job.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="shell py-10">
          <h2 className="section-title">
            <Prompt command="ls">Work</Prompt>
          </h2>
          {/* One row per project: a moving thumbnail, then name, year, one line and any award.
              Rows are split by a hairline, so the list reads top to bottom like a changelog. */}
          <ul className="mt-4">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="border-b border-line last:border-b-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-start gap-4 py-5 sm:gap-5"
                >
                  <div className="img-outline relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg bg-surface sm:w-40">
                    <ProjectPreview
                      name={project.name}
                      media={project.media}
                      sizes="(min-width: 640px) 160px, 112px"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="project-title text-[17px] font-semibold text-fg underline-offset-4 group-hover:underline">
                        {project.name}
                      </h3>
                      <span className="font-mono text-[14px] text-faint">{project.year}</span>
                    </div>
                    <p className="mt-1 text-pretty text-[14px] leading-[1.55] text-muted">
                      {project.tagline}
                    </p>
                    {project.award && (
                      <p className="mt-2 flex items-center gap-1.5 font-mono text-[14px] text-fg/90">
                        <Check className="h-3.5 w-3.5 shrink-0 text-live" strokeWidth={2.5} aria-hidden />
                        {project.award.label}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Names sit in code-style tags, so they need no commas between them. */}
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] text-muted">
            Also built
            {alsoBuilt.map((build) =>
              build.external ? (
                <a key={build.name} href={build.href} target="_blank" rel="noopener" className="code-link">
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

        <section id="open-source" className="shell space-y-10 py-10">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="section-title">
                <Prompt command="ls">Open-source</Prompt>
              </h2>
              <a
                href={openSource.allHref}
                target="_blank"
                rel="noopener"
                className="font-mono text-[14px] text-faint transition-colors duration-150 hover:text-fg"
              >
                see all {openSource.total}
              </a>
            </div>

            {/* Repos as filled tiles, one tone step off the page: the org's mark, the repo and how
                many PRs landed there. Each opens the merged PRs in that repo. */}
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {openSource.repos.map((item) => (
                <li key={item.repo}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3 rounded-xl bg-surface px-3 py-3 transition-colors duration-150 hover:bg-fg/[0.07]"
                  >
                    <Image
                      src={item.avatar}
                      alt=""
                      width={28}
                      height={28}
                      unoptimized
                      className="img-outline h-[30px] w-[30px] shrink-0 rounded-[7px]"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-[15px] font-medium leading-5 text-fg">
                        {item.name}
                      </span>
                      <span className="block font-mono text-[13.5px] leading-4 text-faint">
                        {item.merged} merged
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* A few of the PRs themselves. Titles are commit messages, so they're set like code. */}
            <ul className="mt-5">
              {openSource.highlights.map((pr) => (
                <li key={pr.href} className="border-b border-line last:border-b-0">
                  <a
                    href={pr.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-start gap-3 py-3"
                  >
                    <Image
                      src={pr.avatar}
                      alt=""
                      width={16}
                      height={16}
                      unoptimized
                      className="img-outline mt-[3px] h-4 w-4 shrink-0 rounded-[4px]"
                    />
                    {/* Title and repo share a line from sm up; on phones the repo drops below. */}
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="min-w-0 flex-1 font-mono text-[14px] normal-case leading-[1.5] text-fg/90 underline-offset-4 group-hover:underline">
                        {pr.title}
                      </span>
                      <span className="shrink-0 font-mono text-[13.5px] text-faint">
                        {pr.repo} #{pr.number}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">
              <Prompt command="cat">Stack</Prompt>
            </h2>
            {/* One plain line: the tools are the information, not the boxes around them. */}
            {/* Each separator travels with the tool before it, so no line starts with a dot. */}
            <p className="mt-4 flex flex-wrap font-mono text-[14px] leading-6 text-fg/80">
              {stack.map((tool, index) => (
                <span key={tool} className="whitespace-nowrap">
                  {tool}
                  {index < stack.length - 1 && <span className="px-2 text-faint">·</span>}
                </span>
              ))}
            </p>
          </div>
        </section>

        <Contact />
      </main>

      <SiteFooter />
      <ContactDock />
    </>
  )
}
