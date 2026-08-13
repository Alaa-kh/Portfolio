import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'
import { cn } from '@/shared/utils/cn'

type AnimatedCounterProps = {
  value: string
  className?: string
}

function parseStat(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match?.[1]) return { numeric: 0, suffix: value }
  return { numeric: Number(match[1]), suffix: match[2] ?? '' }
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const { numeric, suffix } = parseStat(value)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(numeric)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [numeric, reducedMotion])

  useEffect(() => {
    if (!started || reducedMotion) return

    const duration = 1100
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(numeric * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [numeric, reducedMotion, started])

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {suffix}
    </span>
  )
}
