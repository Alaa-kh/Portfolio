import { Mail } from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { useNavigateToSection } from '@/shared/hooks/use-navigate-to-section'
import { useTheme } from '@/shared/hooks/use-theme'
import { Reveal } from '@/shared/components/motion/reveal'
import { Container } from '@/shared/components/ui/container'
import { GithubIcon, LinkedinIcon } from '@/shared/components/ui/social-icons'
import { navigationItems } from '@/shared/constants/navigation'
import { socialLinks } from '@/shared/constants/social'

export function SiteFooter() {
  const { t, locale, toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const navigateToSection = useNavigateToSection()
  const year = new Date().getFullYear()

  return (
    <footer className="site-enter-delayed border-t border-border bg-card/70">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <Reveal>
          <div>
            <p className="text-lg font-semibold text-fg">{t.brand.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
              {t.footer.description}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div>
            <p className="mb-3 text-sm font-semibold text-fg">
              {t.footer.navigation}
            </p>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="text-sm text-fg-muted transition duration-300 hover:translate-x-1 hover:text-accent rtl:hover:-translate-x-1"
                    onClick={() => navigateToSection(item.id)}
                  >
                    {t.nav[item.id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div>
            <p className="mb-3 text-sm font-semibold text-fg">{t.footer.social}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition duration-300 hover:scale-110 hover:text-accent"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition duration-300 hover:scale-110 hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={socialLinks.email}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition duration-300 hover:scale-110 hover:text-accent"
                aria-label={t.contact.emailLabel}
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-fg-muted transition hover:text-fg"
              >
                {theme === 'dark' ? t.theme.light : t.theme.dark}
              </button>
              <button
                type="button"
                onClick={toggleLocale}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-fg-muted transition hover:text-fg"
              >
                {locale === 'en' ? t.language.ar : t.language.en}
              </button>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.brand.name}. {t.footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  )
}
