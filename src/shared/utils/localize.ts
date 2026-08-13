import type { Locale } from '@/shared/locales/types'
import type { LocalizedString, LocalizedStringList } from '@/features/projects/types/project'

export function localize(
  value: LocalizedString,
  locale: Locale,
): string {
  return value[locale]
}

export function localizeList(
  value: LocalizedStringList,
  locale: Locale,
): string[] {
  return value[locale]
}
