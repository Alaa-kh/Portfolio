import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LocaleContext } from '@/app/providers/locale-context'
import { defaultLocale, isLocale, locales } from '@/shared/locales'
import type { Locale, TranslationDictionary } from '@/shared/locales/types'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale(): Locale | null {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value && isLocale(value)) return value
  return null
}

function applyLocaleToDocument(locale: Locale): void {
  const root = document.documentElement
  const isArabic = locale === 'ar'

  root.lang = locale
  root.dir = isArabic ? 'rtl' : 'ltr'
  root.classList.toggle('locale-ar', isArabic)
  localStorage.setItem(STORAGE_KEY, locale)
}

type LocaleProviderProps = {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const initial = readStoredLocale() ?? defaultLocale
    applyLocaleToDocument(initial)
    return initial
  })

  useEffect(() => {
    applyLocaleToDocument(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'en' ? 'ar' : 'en'))
  }, [])

  const value = useMemo(
    () => ({
      locale,
      t: locales[locale] as TranslationDictionary,
      dir: (locale === 'ar' ? 'rtl' : 'ltr') as 'ltr' | 'rtl',
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
