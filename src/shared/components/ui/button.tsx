import { cn } from '@/shared/utils/cn'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-fg hover:brightness-110 shadow-[var(--shadow-soft)] ring-1 ring-accent/20',
  secondary:
    'bg-bg-muted text-fg hover:bg-border',
  ghost: 'bg-transparent text-fg-muted hover:text-fg hover:bg-bg-muted',
  outline:
    'bg-transparent text-fg border border-border-strong hover:border-accent hover:text-accent hover:bg-accent-soft/40',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'btn-shine inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
