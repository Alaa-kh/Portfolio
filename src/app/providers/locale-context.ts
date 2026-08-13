import { createContext } from 'react'
import type { Locale, TranslationDictionary } from '@/shared/locales/types'

export type LocaleContextValue = {
  locale: Locale
  t: TranslationDictionary
  dir: 'ltr' | 'rtl'
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
