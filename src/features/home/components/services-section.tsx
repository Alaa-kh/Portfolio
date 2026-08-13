import {
  AppWindow,
  Boxes,
  Gauge,
  Layers,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { Reveal } from '@/shared/components/motion/reveal'
import { Section } from '@/shared/components/ui/section'
import { SectionHeading } from '@/shared/components/ui/section-heading'
import { services } from '@/shared/constants/services'
import { localize } from '@/shared/utils/localize'
import type { ServiceItem } from '@/shared/constants/services'

const iconMap: Record<ServiceItem['icon'], typeof AppWindow> = {
  web: AppWindow,
  mobile: Smartphone,
  fullstack: Layers,
  api: Workflow,
  ui: Sparkles,
  architecture: Boxes,
  performance: Gauge,
}

export function ServicesSection() {
  const { locale, t } = useLocale()

  return (
    <Section id="services">
      <SectionHeading
        index="04"
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon]
          return (
            <Reveal key={service.id} delayMs={index * 45}>
              <article className="luxury-card group h-full p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">
                  {localize(service.title, locale)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {localize(service.description, locale)}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
