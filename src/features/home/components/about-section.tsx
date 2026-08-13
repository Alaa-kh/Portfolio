import { useLocale } from '@/shared/hooks/use-locale'
import { AnimatedCounter } from '@/shared/components/motion/animated-counter'
import { Reveal } from '@/shared/components/motion/reveal'
import { Section } from '@/shared/components/ui/section'
import { SectionHeading } from '@/shared/components/ui/section-heading'
import { aboutStats } from '@/shared/constants/about'

export function AboutSection() {
  const { t } = useLocale()

  const stats = [
    { label: t.about.stats.years, value: aboutStats.yearsOfExperience },
    { label: t.about.stats.projects, value: aboutStats.projectsDelivered },
    { label: t.about.stats.technologies, value: aboutStats.technologies },
    { label: t.about.stats.apps, value: aboutStats.completedApps },
  ]

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            index="01"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />
          <Reveal>
            <div className="luxury-card p-6 md:p-8">
              <p className="max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
                {t.about.summary}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-fg">
                {t.about.approachTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
                {t.about.approach}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-fg">
                {t.about.expertiseTitle}
              </h3>
              <ul className="mt-4 space-y-3 stagger-children">
                {t.about.expertise.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-fg-muted md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={100}>
          <div className="bento-grid">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`luxury-card glow-breathe p-5 md:p-6 ${index === 0 ? 'bento-span-2' : ''}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-display text-4xl font-bold tracking-tight text-gradient md:text-5xl"
                />
                <p className="mt-3 text-sm text-fg-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
