import { ogSize, renderOgCard } from '@/lib/og'
import { getProject, projects } from '@/lib/projects'
import { site } from '@/lib/site'

export const alt = `A project by ${site.name}`
export const size = ogSize
export const contentType = 'image/png'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  return renderOgCard({
    title: project?.name ?? 'Shiva',
    detail: project?.tagline ?? site.share.detail,
    footer: project?.award?.label ?? `by ${site.name}`,
    shots: project ? [project.slug] : [],
  })
}
