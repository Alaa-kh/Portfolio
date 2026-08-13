import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useLocale } from '@/shared/hooks/use-locale'
import { getProjectBySlug } from '@/features/projects/utils/project-utils'
import { Reveal } from '@/shared/components/motion/reveal'
import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { Container } from '@/shared/components/ui/container'
import { GithubIcon } from '@/shared/components/ui/social-icons'
import { localize, localizeList } from '@/shared/utils/localize'
import type { ReactNode } from 'react'

export function ProjectDetailsPage() {
  const { slug = '' } = useParams()
  const { locale, t } = useLocale()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <Container className="py-24">
        <Reveal>
          <p className="text-fg-muted">{t.common.empty}</p>
          <Link to="/#home" className="mt-6 inline-flex">
            <Button variant="outline">
              <ArrowLeft size={16} className="rtl:rotate-180" />
              {t.projects.backHome}
            </Button>
          </Link>
        </Reveal>
      </Container>
    )
  }

  return (
    <main className="pb-20">
      <Container className="pt-10">
        <Reveal variant="fade">
          <Link to="/#projects" className="inline-flex">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} className="rtl:rotate-180" />
              {t.projects.backHome}
            </Button>
          </Link>
        </Reveal>

        <Reveal delayMs={60} variant="scale">
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-lift)]">
            <img
              src={project.image}
              alt={`${project.title} large preview`}
              className="max-h-[520px] w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-8 max-w-3xl">
            <Badge>{localize(project.category, locale)}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fg md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {localize(project.description, locale)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  {t.projects.viewLive}
                  <ExternalLink size={16} />
                </Button>
              </a>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <GithubIcon size={16} />
                    {t.projects.github}
                  </Button>
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delayMs={40}>
            <DetailBlock title={t.projects.problem}>
              {localize(project.problem, locale)}
            </DetailBlock>
          </Reveal>
          <Reveal delayMs={100}>
            <DetailBlock title={t.projects.solution}>
              {localize(project.solution, locale)}
            </DetailBlock>
          </Reveal>
          <Reveal delayMs={140}>
            <DetailList
              title={t.projects.features}
              items={localizeList(project.features, locale)}
            />
          </Reveal>
          <Reveal delayMs={180}>
            <DetailList
              title={t.projects.challenges}
              items={localizeList(project.challenges, locale)}
            />
          </Reveal>
          <Reveal delayMs={220}>
            <DetailList
              title={t.projects.results}
              items={localizeList(project.results, locale)}
            />
          </Reveal>
          <Reveal delayMs={260}>
            <div className="surface-card h-full p-6 transition duration-300 hover:-translate-y-1">
              <h2 className="text-lg font-semibold text-fg">
                {t.projects.technologies}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </main>
  )
}

function DetailBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="surface-card h-full p-6 transition duration-300 hover:-translate-y-1">
      <h2 className="text-lg font-semibold text-fg">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-fg-muted md:text-base">
        {children}
      </p>
    </div>
  )
}

function DetailList({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="surface-card h-full p-6 transition duration-300 hover:-translate-y-1">
      <h2 className="text-lg font-semibold text-fg">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-relaxed text-fg-muted md:text-base"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
