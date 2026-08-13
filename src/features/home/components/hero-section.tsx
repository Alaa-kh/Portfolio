import { ArrowRight, Code2, Layers3, Smartphone, Sparkles } from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { useNavigateToSection } from '@/shared/hooks/use-navigate-to-section'
import { AnimatedText } from '@/shared/components/motion/animated-text'
import { InfiniteMarquee } from '@/shared/components/motion/infinite-marquee'
import { Reveal } from '@/shared/components/motion/reveal'
import { Button } from '@/shared/components/ui/button'
import { Section } from '@/shared/components/ui/section'

export function HeroSection() {
  const { t } = useLocale()
  const navigateToSection = useNavigateToSection()

  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-8 md:pt-14"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute -top-24 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl rtl:translate-x-1/2" />

      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal variant="up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-fg-muted backdrop-blur md:mb-9">
            <Sparkles size={14} className="animate-float text-gold" />
            <span className="tracking-[0.14em] text-gold uppercase">
              {t.hero.eyebrow}
            </span>
          </div>

          <AnimatedText
            as="h1"
            text={t.hero.title}
            className="font-display text-gradient max-w-3xl text-4xl leading-[1.35] font-bold tracking-tight sm:text-5xl sm:leading-[1.32] lg:text-7xl lg:leading-[1.28]"
            delayMs={80}
          />

          <AnimatedText
            as="p"
            text={t.hero.description}
            className="mt-10 max-w-2xl text-base leading-relaxed text-fg-muted md:mt-12 md:text-lg"
            delayMs={220}
          />

          <ul className="mt-12 flex flex-wrap gap-3 md:mt-14">
            {t.hero.highlights.map((item, index) => (
              <Reveal key={item} delayMs={320 + index * 50} variant="fade">
                <li className="rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-fg-muted backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-accent/40 hover:text-fg md:text-sm">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row md:mt-14">
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
        </Reveal>

        <Reveal delayMs={140} variant="scale" className="relative">
          <div
            aria-label={t.hero.visualLabel}
            className="relative mx-auto aspect-square w-full max-w-[440px]"
          >
            <div className="hero-orb -start-6 top-8 h-40 w-40 bg-accent/40" />
            <div className="hero-orb -end-4 bottom-10 h-36 w-36 bg-gold/35" />

            <div className="glow-breathe absolute inset-0 rounded-[2rem] border border-border bg-card/70 p-5 shadow-[var(--shadow-lift)] backdrop-blur-xl">
              <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-border bg-gradient-to-br from-bg-muted/80 to-card/40 p-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-accent">
                      <Code2 size={18} />
                      <span className="font-mono text-xs">portfolio.ts</span>
                    </div>
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent uppercase">
                      Live
                    </span>
                  </div>
                  <pre className="overflow-hidden rounded-2xl border border-border bg-bg/70 p-4 font-mono text-[11px] leading-6 text-fg-muted sm:text-xs">
{`const craft = {
  web: true,
  mobile: true,
  fullstack: true,
  uiux: "modern",
  scale: "intentional",
};`}
                  </pre>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="luxury-card p-4">
                    <Layers3 className="mb-2 text-accent" size={18} />
                    <p className="text-sm font-semibold text-fg">Architecture</p>
                    <p className="mt-1 text-xs text-fg-subtle">Clean & modular</p>
                  </div>
                  <div className="luxury-card p-4">
                    <Smartphone className="mb-2 text-gold" size={18} />
                    <p className="text-sm font-semibold text-fg">Products</p>
                    <p className="mt-1 text-xs text-fg-subtle">Web & mobile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-float absolute -top-3 -end-2 rounded-2xl border border-border bg-card/90 px-3 py-2 text-xs font-semibold text-fg shadow-[var(--shadow-soft)] backdrop-blur">
              React · Flutter
            </div>
            <div className="animate-float-delayed absolute -bottom-2 -start-2 rounded-2xl border border-border bg-card/90 px-3 py-2 text-xs font-semibold text-fg shadow-[var(--shadow-soft)] backdrop-blur">
              TypeScript
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={260} className="mt-28 border-t border-border/60 pt-12 md:mt-36 md:pt-16">
        <InfiniteMarquee items={t.hero.highlights} />
      </Reveal>
    </Section>
  )
}
