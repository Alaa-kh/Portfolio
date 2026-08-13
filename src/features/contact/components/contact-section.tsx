import type { ReactNode } from 'react'
import { Mail } from 'lucide-react'
import { useLocale } from '@/shared/hooks/use-locale'
import { useContactForm } from '@/features/contact/hooks/use-contact-form'
import { Reveal } from '@/shared/components/motion/reveal'
import { Button } from '@/shared/components/ui/button'
import { Section } from '@/shared/components/ui/section'
import { SectionHeading } from '@/shared/components/ui/section-heading'
import { GithubIcon, LinkedinIcon } from '@/shared/components/ui/social-icons'
import { socialLinks } from '@/shared/constants/social'
import { cn } from '@/shared/utils/cn'

export function ContactSection() {
  const { t } = useLocale()
  const { form, onSubmit, submitState, isSubmitting } = useContactForm()
  const {
    register,
    formState: { errors },
  } = form

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            index="06"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />

          <Reveal>
            <div className="space-y-4">
              <a
                href={socialLinks.email}
                className="luxury-card flex items-center gap-3 p-4"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-sm text-fg-subtle">
                    {t.contact.emailLabel}
                  </span>
                  <span className="font-medium text-fg">
                    {socialLinks.emailDisplay}
                  </span>
                </span>
              </a>

              <p className="text-sm font-semibold text-fg">{t.contact.socialTitle}</p>
              <div className="flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg-muted transition hover:text-accent"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg-muted transition hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={80}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="luxury-card space-y-5 p-6 md:p-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-fg">
                {t.contact.formTitle}
              </h3>
              {t.contact.formNote ? (
                <p className="mt-2 text-sm text-fg-subtle">{t.contact.formNote}</p>
              ) : null}
            </div>

            <Field
              id="name"
              label={t.contact.name}
              error={errors.name?.message}
            >
              <input
                id="name"
                autoComplete="name"
                placeholder={t.contact.namePlaceholder}
                className={inputClassName(Boolean(errors.name))}
                {...register('name')}
              />
            </Field>

            <Field
              id="email"
              label={t.contact.email}
              error={errors.email?.message}
            >
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={t.contact.emailPlaceholder}
                className={inputClassName(Boolean(errors.email))}
                {...register('email')}
              />
            </Field>

            <Field
              id="message"
              label={t.contact.message}
              error={errors.message?.message}
            >
              <textarea
                id="message"
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className={cn(inputClassName(Boolean(errors.message)), 'resize-y')}
                {...register('message')}
              />
            </Field>

            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? t.contact.submitting : t.contact.submit}
            </Button>

            {submitState === 'success' ? (
              <p role="status" className="text-sm text-success">
                {t.contact.success}
              </p>
            ) : null}
            {submitState === 'error' ? (
              <p role="alert" className="text-sm text-danger">
                {t.contact.error}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function inputClassName(hasError: boolean): string {
  return cn(
    'w-full rounded-2xl border bg-bg px-4 py-3 text-sm text-fg outline-none transition-all duration-300 placeholder:text-fg-subtle focus:translate-y-[-1px] focus:shadow-[var(--shadow-soft)]',
    hasError
      ? 'border-danger focus:border-danger'
      : 'border-border focus:border-accent',
  )
}
