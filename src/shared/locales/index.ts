import { ar } from '@/shared/locales/ar'
import { en } from '@/shared/locales/en'
import type { Locale, TranslationDictionary } from '@/shared/locales/types'

export const locales: Record<Locale, TranslationDictionary> = {
  en,
  ar,
}

export const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'ar'
}
