import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'

type InViewScopeProps = {
  children: ReactNode
  className?: string
}

/**
 * Adds entrance animation to all nested interactive/content elements
 * when the scope enters the viewport.
 */
export function InViewScope({ children, className }: InViewScopeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (reducedMotion) {
      node.classList.add('inview-active')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add('inview-active')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div ref={ref} className={cn('inview-scope', className)}>
      {children}
    </div>
  )
}
