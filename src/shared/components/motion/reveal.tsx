import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  variant?: RevealVariant
  once?: boolean
}

export function Reveal({
  children,
  className,
  delayMs = 0,
  variant = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const visible = reducedMotion || revealed

  useEffect(() => {
    if (reducedMotion) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true)
          if (once) observer.disconnect()
          return
        }

        if (!once) setRevealed(false)
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, reducedMotion])

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        `reveal-${variant}`,
        visible && 'reveal-visible',
        className,
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
