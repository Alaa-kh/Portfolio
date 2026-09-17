import { useEffect, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'

type TypewriterTextProps = {
  text: string
  className?: string
  delayMs?: number
  speedMs?: number
  as?: 'p' | 'h2' | 'h3' | 'span'
}

export function TypewriterText({
  text,
  className,
  delayMs = 0,
  speedMs = 42,
  as: Tag = 'p',
}: TypewriterTextProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [visibleCount, setVisibleCount] = useState(reducedMotion ? text.length : 0)
  const [started, setStarted] = useState(reducedMotion)
  const [done, setDone] = useState(reducedMotion)

  useEffect(() => {
    setVisibleCount(reducedMotion ? text.length : 0)
    setStarted(reducedMotion)
    setDone(reducedMotion)
  }, [text, reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const startTimer = window.setTimeout(() => {
      setStarted(true)
    }, delayMs)

    return () => window.clearTimeout(startTimer)
  }, [delayMs, reducedMotion, text])

  useEffect(() => {
    if (reducedMotion || !started) return
    if (visibleCount >= text.length) {
      setDone(true)
      return
    }

    const tick = window.setTimeout(() => {
      setVisibleCount((count) => Math.min(count + 1, text.length))
    }, speedMs)

    return () => window.clearTimeout(tick)
  }, [reducedMotion, started, speedMs, text, visibleCount])

  return (
    <Tag className={cn('typewriter-text', done && 'typewriter-done', className)}>
      <span>{text.slice(0, visibleCount)}</span>
      <span className="typewriter-caret" aria-hidden>
        |
      </span>
    </Tag>
  )
}
