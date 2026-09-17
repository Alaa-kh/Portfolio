import {
  AppWindow,
  Boxes,
  Server,
  Smartphone,
} from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { InfiniteMarquee } from '@/shared/components/motion/infinite-marquee'
import { Reveal } from '@/shared/components/motion/reveal'
import { Section } from '@/shared/components/ui/section'
import { SectionHeading } from '@/shared/components/ui/section-heading'
import {
  skillCategories,
  type SkillCategoryId,
} from '@/shared/constants/skills'
import { cn } from '@/shared/utils/cn'

const categoryIcons: Record<SkillCategoryId, typeof AppWindow> = {
  frontend: AppWindow,
  backend: Server,
  mobile: Smartphone,
  tools: Boxes,
}

const categoryTone: Record<SkillCategoryId, string> = {
  frontend: 'skill-panel-accent',
  backend: 'skill-panel-gold',
  mobile: 'skill-panel-accent',
  tools: 'skill-panel-gold',
}

export function SkillsSection() {
  const { t } = useLocale()
  const allSkills = skillCategories.flatMap((category) => category.skills)

  return (
    <Section id="skills">
      <SectionHeading
        index="03"
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />

      <Reveal className="mb-7 md:mb-8">
        <InfiniteMarquee items={allSkills} />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[category.id]

          return (
            <Reveal key={category.id} delayMs={index * 70} className="h-full">
              <article
                className={cn(
                  'skill-panel group relative h-full overflow-hidden',
                  categoryTone[category.id],
                )}
              >
                <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="skill-panel-icon">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-fg md:text-2xl">
                      {t.skills.categories[category.id]}
                    </h3>
                  </div>

                  <ul className="mt-auto grid gap-2 sm:grid-cols-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="skill-chip">
                        <span className="skill-chip-dot" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
