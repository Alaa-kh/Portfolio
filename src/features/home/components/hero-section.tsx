import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { useNavigateToSection } from '@/shared/hooks/use-navigate-to-section'
import { AnimatedText } from '@/shared/components/motion/animated-text'
import { TypewriterText } from '@/shared/components/motion/typewriter-text'
import { Button } from '@/shared/components/ui/button'
import { Section } from '@/shared/components/ui/section'

export function HeroSection() {
  const { t } = useLocale()
  const navigateToSection = useNavigateToSection()

  return (
    <Section
      id="home"
      className="hero-banner relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-orb hero-orb-a -start-10 top-0 h-64 w-64 bg-accent/35" />
        <div className="hero-orb hero-orb-b end-0 top-24 h-56 w-56 bg-gold/30" />
        <div className="hero-orb hero-orb-c start-1/3 bottom-0 h-48 w-48 bg-accent/20" />
        <div className="hero-grid-fade absolute inset-0" />
      </div>

      <div className="mx-auto flex min-h-[62vh] max-w-4xl flex-col items-center justify-center text-center">
        <p className="hero-line hero-line-1 mb-4 text-xs font-semibold tracking-[0.28em] text-gold uppercase md:mb-5">
          {t.hero.eyebrow}
        </p>

        <AnimatedText
          as="h1"
          text={t.brand.name}
          className="hero-name font-display text-gradient text-5xl leading-[1.25] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          wordClassName="hero-name-word"
          delayMs={80}
        />

        <TypewriterText
          as="p"
          text={t.hero.title}
          className="mt-1 max-w-2xl min-h-[1.9em] font-display text-xl leading-snug font-semibold text-fg sm:text-2xl md:mt-1.5 md:min-h-[2em] md:text-3xl"
          delayMs={700}
          speedMs={48}
        />

        <TypewriterText
          as="p"
          text={t.hero.description}
          className="mt-1.5 max-w-xl min-h-[1.6em] text-base leading-relaxed text-fg-muted md:mt-2 md:text-lg"
          delayMs={700 + t.hero.title.length * 48 + 280}
          speedMs={36}
        />

        <div className="hero-line hero-line-5 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={() => navigateToSection('projects')}>
            {t.hero.viewWork}
            <ArrowRight size={18} className="rtl:rotate-180" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigateToSection('contact')}
          >
            {t.hero.contact}
          </Button>
        </div>
      </div>
    </Section>
  )
}
