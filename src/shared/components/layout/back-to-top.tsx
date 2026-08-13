import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { cn } from '@/shared/utils/cn'

export function BackToTopButton() {
  const { t } = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label={t.common.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed end-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-fg shadow-[var(--shadow-lift)] transition-all duration-300 hover:scale-110 hover:border-accent hover:text-accent',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}
