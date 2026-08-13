import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { useNavigateToSection } from '@/shared/hooks/use-navigate-to-section'
import { useTheme } from '@/shared/hooks/use-theme'
import { Button } from '@/shared/components/ui/button'
import { Container } from '@/shared/components/ui/container'
import { navigationItems } from '@/shared/constants/navigation'
import { useScrollSpy } from '@/shared/hooks/use-scroll-spy'
import { useScrolled } from '@/shared/hooks/use-scrolled'
import { cn } from '@/shared/utils/cn'

export function SiteHeader() {
  const { t, locale, toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const navigateToSection = useNavigateToSection()
  const scrolled = useScrolled()
  const activeId = useScrollSpy()
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const onNavClick = (sectionId: string) => {
    navigateToSection(sectionId)
    setMobileOpen(false)
  }

  const navStart = 0.28
  const actionsStart = navStart + navigationItems.length * 0.07 + 0.06

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-border/80 bg-bg-elevated/80 shadow-[var(--shadow-soft)] backdrop-blur-2xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          to="/#home"
          className="group flex items-center gap-3"
          onClick={(event) => {
            event.preventDefault()
            onNavClick('home')
          }}
        >
          <span
            className="header-item pulse-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-gold text-sm font-bold text-accent-fg shadow-[var(--shadow-soft)] transition duration-300 group-hover:scale-[1.06] group-hover:rotate-3"
            style={{ animationDelay: '0.04s' }}
          >
            AK
          </span>
          <span className="hidden flex-col gap-0.5 leading-tight sm:flex">
            <span
              className="header-item text-sm font-semibold text-fg"
              style={{ animationDelay: '0.12s' }}
            >
              {t.brand.name}
            </span>
            <span
              className="header-item text-xs text-fg-subtle"
              style={{ animationDelay: '0.2s' }}
            >
              {t.brand.role}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavClick(item.id)}
              style={{ animationDelay: `${navStart + index * 0.07}s` }}
              className={cn(
                'header-item nav-link rounded-full px-3 py-2 text-sm font-medium transition-all duration-300',
                activeId === item.id
                  ? 'nav-link-active bg-accent-soft text-accent'
                  : 'text-fg-muted hover:text-fg',
              )}
            >
              {t.nav[item.id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            style={{ animationDelay: `${actionsStart}s` }}
            className="header-item inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-fg-muted transition duration-300 hover:scale-105 hover:text-fg"
            aria-label={t.theme.toggle}
            title={theme === 'dark' ? t.theme.light : t.theme.dark}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={toggleLocale}
            style={{ animationDelay: `${actionsStart + 0.07}s` }}
            className="header-item inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-card px-3 text-xs font-semibold text-fg-muted transition duration-300 hover:scale-105 hover:text-fg"
            aria-label={t.language.label}
          >
            {locale === 'en' ? t.language.ar : t.language.en}
          </button>

          <Button
            size="sm"
            className="header-item hidden sm:inline-flex"
            style={{ animationDelay: `${actionsStart + 0.14}s` }}
            onClick={() => onNavClick('contact')}
          >
            {t.nav.cta}
          </Button>

          <button
            type="button"
            style={{ animationDelay: `${actionsStart + 0.14}s` }}
            className="header-item inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-fg transition duration-300 hover:scale-105 lg:hidden"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={cn(
          'mobile-nav border-t border-border bg-card lg:hidden',
          mobileOpen ? 'mobile-nav-open' : 'mobile-nav-closed',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavClick(item.id)}
              style={{ transitionDelay: mobileOpen ? `${index * 40}ms` : '0ms' }}
              className={cn(
                'mobile-nav-item rounded-xl px-4 py-3 text-start text-sm font-medium transition-all duration-300',
                activeId === item.id
                  ? 'bg-accent-soft text-accent'
                  : 'text-fg-muted hover:bg-bg-muted hover:text-fg',
              )}
            >
              {t.nav[item.id]}
            </button>
          ))}
          <Button className="mt-2 w-full" onClick={() => onNavClick('contact')}>
            {t.nav.cta}
          </Button>
        </Container>
      </div>
    </header>
  )
}
