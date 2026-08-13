import {
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { cn } from '@/shared/utils/cn'
import { usePrefersReducedMotion } from '@/shared/hooks/use-prefers-reduced-motion'

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export function TiltCard({
  children,
  className,
  maxTilt = 7,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * (maxTilt * 2)
    const rotateX = (0.5 - y) * (maxTilt * 2)

    node.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
    node.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
  }

  const onLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--tilt-x', '0deg')
    node.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn('tilt-card', className)}
      style={
        {
          transform:
            'perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
