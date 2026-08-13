import { useLocale } from '@/shared/hooks/use-locale'
import { InfiniteMarquee } from '@/shared/components/motion/infinite-marquee'
import { Reveal } from '@/shared/components/motion/reveal'
import { TiltCard } from '@/shared/components/motion/tilt-card'
import { Section } from '@/shared/components/ui/section'
import { SectionHeading } from '@/shared/components/ui/section-heading'
import { skillCategories } from '@/shared/constants/skills'

export function SkillsSection() {
  const { t } = useLocale()
  const allSkills = skillCategories.flatMap((category) => category.skills)

  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />

      <Reveal className="mb-12 md:mb-14">
        <InfiniteMarquee items={allSkills} />
      </Reveal>

      <div className="bento-grid">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.id}
            delayMs={index * 70}
            className={index === 0 || index === 3 ? 'bento-span-2' : undefined}
          >
            <TiltCard>
              <article className="luxury-card flex h-full min-h-[180px] flex-col p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {t.skills.categories[category.id]}
                  </h3>
                  <span className="section-index">0{index + 1}</span>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-bg/50 px-3 py-1.5 text-xs font-medium text-fg-muted transition hover:scale-105 hover:border-accent/40 hover:text-fg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
