import { AnimatedText } from '@/shared/components/motion/animated-text'
import { Reveal } from '@/shared/components/motion/reveal'
import { cn } from '@/shared/utils/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'start' | 'center'
  className?: string
  index?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  className,
  index,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <div
        className={cn(
        'mb-5 flex items-center gap-3 md:mb-7',
        align === 'center' && 'justify-center',
      )}
      >
        {index ? <span className="section-index">{index}</span> : null}
        <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
          {eyebrow}
        </p>
      </div>

      <AnimatedText
        as="h2"
        text={title}
        className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl"
        delayMs={40}
      />

      {description ? (
        <AnimatedText
          as="p"
          text={description}
          className="mt-7 max-w-2xl text-base leading-relaxed text-fg-muted md:mt-8 md:text-lg"
          delayMs={160}
        />
      ) : null}
    </Reveal>
  )
}
