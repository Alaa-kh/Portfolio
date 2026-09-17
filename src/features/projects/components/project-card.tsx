import { ExternalLink } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocale } from '@/shared/hooks/use-locale'
import type { Project } from '@/features/projects/types/project'
import { TiltCard } from '@/shared/components/motion/tilt-card'
import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/cn'
import { localize } from '@/shared/utils/localize'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  className?: string
}

export function ProjectCard({
  project,
  featured = false,
  className,
}: ProjectCardProps) {
  const { locale, t } = useLocale()
  const navigate = useNavigate()
  const detailsPath = `/projects/${project.slug}`

  const openDetails = () => {
    navigate(detailsPath)
  }

  return (
    <TiltCard maxTilt={featured ? 4 : 8} className={cn('h-full', className)}>
      <article
        role="link"
        tabIndex={0}
        onClick={openDetails}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openDetails()
          }
        }}
        className={cn(
          'group luxury-card flex h-full cursor-pointer flex-col overflow-hidden',
          featured && 'md:grid md:grid-cols-1',
        )}
      >
        <div
          className={cn(
            'relative shrink-0 overflow-hidden bg-bg-muted',
            featured
              ? 'aspect-[16/9] min-h-[18rem] sm:min-h-[24rem] lg:min-h-[28rem]'
              : 'aspect-[16/10]',
          )}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-6">
            <Badge className="border-white/20 bg-white/15 text-white backdrop-blur">
              {localize(project.category, locale)}
            </Badge>
            <span className="translate-y-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 opacity-0 shadow transition duration-400 group-hover:translate-y-0 group-hover:opacity-100">
              {t.projects.viewProject}
            </span>
          </div>
        </div>

        <div
          className={cn(
            'relative z-10 flex flex-1 flex-col p-5 md:p-7',
            featured && 'md:p-9',
          )}
        >
          <h3
            className={cn(
              'font-display font-bold tracking-tight text-fg transition duration-300 group-hover:text-accent',
              featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl',
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              'mt-3 text-sm leading-relaxed text-fg-muted md:text-base',
              featured ? 'max-w-3xl' : 'line-clamp-3 min-h-[4.5rem]',
            )}
          >
            {localize(
              featured ? project.description : project.shortDescription,
              locale,
            )}
          </p>

          <div className="mt-5 flex min-h-[2rem] flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <Button size="sm">
                {t.projects.viewLive}
                <ExternalLink size={15} />
              </Button>
            </a>
            <Link to={detailsPath} onClick={(event) => event.stopPropagation()}>
              <Button size="sm" variant="outline">
                {t.projects.viewDetails}
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  )
}
