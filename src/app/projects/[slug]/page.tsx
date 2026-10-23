import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Contact } from '@/components/contact'
import { ContactDock } from '@/components/contact-dock'
import { DemoPlayer } from '@/components/demo-video'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Prompt } from '@/components/terminal'
import { getProject, projects } from '@/lib/projects'
import { site } from '@/lib/site'

type PageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const description = project.summary
  return {
    title: project.name,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `/projects/${project.slug}`,
      title: `${project.name} by ${site.name}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} by ${site.name}`,
      description,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteHeader />

      <main className="lowercase">
        <article className="shell pb-14 pt-6 sm:pt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All work
          </Link>

          <header className="mt-8">
            <div className="flex items-baseline justify-between gap-6">
              <h1 className="project-title text-[clamp(2rem,5.5vw,2.75rem)] font-semibold leading-none">
                {project.name}
              </h1>
              <span className="font-mono text-[13px] text-faint">{project.year}</span>
            </div>
            <p className="mt-4 text-pretty text-lg leading-snug text-muted">
              {project.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px]">
              {project.award &&
                (project.award.href ? (
                  <a
                    href={project.award.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 font-mono text-[13px] text-fg underline-offset-4 hover:underline"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-live" strokeWidth={3} aria-hidden />
                    {project.award.label}
                  </a>
                ) : (
                  <p className="flex items-center gap-2 font-mono text-[13px] text-fg">
                    <Check className="h-3.5 w-3.5 shrink-0 text-live" strokeWidth={3} aria-hidden />
                    {project.award.label}
                  </p>
                ))}
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-fg underline decoration-fg/30 underline-offset-4 transition-colors hover:decoration-fg"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </header>

          <div className="mt-8 overflow-hidden rounded-xl border border-line bg-surface">
            <DemoPlayer
              name={project.name}
              media={project.media}
              sizes="(min-width: 704px) 640px, 100vw"
            />
          </div>

          <div className="mt-10 space-y-9">
            <div>
              <h2 className="section-title">
                <Prompt command="cat">Overview</Prompt>
              </h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-fg/90">
                {project.summary}
              </p>
            </div>

            <div>
              <h2 className="section-title">
                <Prompt>What I built</Prompt>
              </h2>
              <ul className="mt-3 space-y-2.5 text-[15px] leading-snug text-fg/90">
                {project.built.map((line) => (
                  <li
                    key={line}
                    className="relative pl-6 before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-3 before:bg-fg/40"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-title">
                <Prompt command="cat">Stack</Prompt>
              </h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tool) => (
                  <li key={tool} className="chip">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="group mt-12 flex items-center justify-between gap-6 border-y border-line py-5"
          >
            <span>
              <span className="block font-mono text-[13px] text-faint">Next project</span>
              <span className="project-title mt-1 block text-[22px] font-semibold">
                {next.name}
              </span>
            </span>
            <ArrowRight
              className="h-5 w-5 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
              aria-hidden
            />
          </Link>
        </article>

        <Contact />
      </main>

      <SiteFooter />
      <ContactDock />
    </>
  )
}
