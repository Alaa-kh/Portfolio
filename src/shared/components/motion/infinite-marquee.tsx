import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type InfiniteMarqueeProps = {
  items: string[]
  className?: string
}

export function InfiniteMarquee({ items, className }: InfiniteMarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className={cn('marquee', className)} aria-hidden="true">
      <div className="marquee-track gap-5 py-3 md:gap-6">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center rounded-full border border-border bg-card/70 px-5 py-2.5 text-sm font-medium text-fg-muted backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

type MarqueeSlotProps = {
  children: ReactNode
  className?: string
}

export function MarqueeSlot({ children, className }: MarqueeSlotProps) {
  return <div className={cn('marquee', className)}>{children}</div>
}
