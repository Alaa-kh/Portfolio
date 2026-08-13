import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'

type AnimatedTextProps = {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  wordClassName?: string
  delayMs?: number
}

export function AnimatedText({
  text,
  as: Tag = 'span',
  className,
  wordClassName,
  delayMs = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const words = useMemo(() => text.trim().split(/\s+/), [text])

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <Tag
      ref={(node) => {
        ref.current = node
      }}
      className={cn('animated-text', visible && 'animated-text-visible', className)}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="animated-word-wrap">
          <span
            className={cn('animated-word', wordClassName)}
            style={{
              transitionDelay: reducedMotion
                ? undefined
                : `${delayMs + index * 55}ms`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}
