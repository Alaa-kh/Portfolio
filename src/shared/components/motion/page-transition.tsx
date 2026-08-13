import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { cn } from '@/shared/utils/cn'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'

type PageTransitionProps = {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const location = useLocation()
  const reducedMotion = usePrefersReducedMotion()
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (reducedMotion) {
      setActive(true)
      return
    }

    setActive(false)
    const frame = requestAnimationFrame(() => setActive(true))
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, reducedMotion])

  return (
    <div
      key={location.pathname}
      className={cn(
        'page-enter',
        active && 'page-enter-active',
        className,
      )}
    >
      {children}
    </div>
  )
}
