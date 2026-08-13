import type { Project } from '@/features/projects/types/project'
import { projects } from '@/shared/constants/projects'

export function getFeaturedProject(
  list: readonly Project[] = projects,
): Project | undefined {
  return list.find((project) => project.featured) ?? list[0]
}

export function getNonFeaturedProjects(
  list: readonly Project[] = projects,
): Project[] {
  const featured = getFeaturedProject(list)
  return list.filter((project) => project.id !== featured?.id)
}

export function getProjectBySlug(
  slug: string,
  list: readonly Project[] = projects,
): Project | undefined {
  return list.find((project) => project.slug === slug)
}
