import type { ReactNode } from 'react'
import { Container } from '@/shared/components/ui/container'
import { InViewScope } from '@/shared/components/motion/in-view-scope'
import { cn } from '@/shared/utils/cn'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('section-space scroll-mt-24', className)}>
      <Container className={containerClassName}>
        <InViewScope>{children}</InViewScope>
      </Container>
    </section>
  )
}
