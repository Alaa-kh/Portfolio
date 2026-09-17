import { CheckCircle2, Compass, Sparkles } from 'lucide-react'
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
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <SectionHeading
            index="02"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />

          <Reveal>
            <article className="luxury-card overflow-hidden">
              <div className="border-b border-border/70 bg-gradient-to-br from-accent-soft/40 via-transparent to-gold/10 p-5 md:p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Sparkles size={18} />
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-fg md:text-lg">
                  {t.about.summary}
                </p>
              </div>

              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-border/70 p-5 md:border-e md:border-b-0 md:p-6">
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Compass size={18} />
                    <h3 className="text-base font-semibold text-fg md:text-lg">
                      {t.about.approachTitle}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted md:text-base">
                    {t.about.approach}
                  </p>
                </div>

                <div className="p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2 text-gold">
                    <CheckCircle2 size={18} />
                    <h3 className="text-base font-semibold text-fg md:text-lg">
                      {t.about.expertiseTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {t.about.expertise.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-2xl border border-border/60 bg-bg-muted/40 px-3.5 py-2.5 text-sm leading-relaxed text-fg-muted transition duration-300 hover:border-accent/35 hover:bg-accent-soft/30 hover:text-fg"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
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
