import { useLocale } from '@/shared/hooks/use-locale'
import { ProjectCard } from '@/features/projects/components/project-card'
import {
  getFeaturedProject,
  getNonFeaturedProjects,
} from '@/features/projects/utils/project-utils'
import { Reveal } from '@/shared/components/motion/reveal'
import { Section } from '@/shared/components/ui/section'
import { SectionHeading } from '@/shared/components/ui/section-heading'
import { projects } from '@/shared/constants/projects'

export function ProjectsSection() {
  const { t } = useLocale()
  const featured = getFeaturedProject(projects)
  const others = getNonFeaturedProjects(projects)

  if (!featured) {
    return (
      <Section id="projects">
        <p className="text-fg-muted">{t.common.empty}</p>
      </Section>
    )
  }

  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <Reveal>
        <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-gold uppercase">
          {t.projects.featuredLabel}
        </p>
        <ProjectCard project={featured} featured />
      </Reveal>

      <div className="mt-14">
        <h3 className="font-display mb-7 text-2xl font-bold text-fg">
          {t.projects.allTitle}
        </h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {others.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
