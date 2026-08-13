import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-bg/60 px-2.5 py-1 text-xs font-medium text-fg-muted backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </span>
  )
}
