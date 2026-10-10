import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
