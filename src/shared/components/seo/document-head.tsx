import { useEffect } from 'react'
import { useLocale } from '@/shared/hooks/use-locale'
import { seoConfig } from '@/app/config/seo'

export function DocumentHead() {
  const { t, locale } = useLocale()

  useEffect(() => {
    document.title = t.meta.title

    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector(selector)
      if (element) {
        element.setAttribute(attribute, value)
      }
    }

    setMeta('meta[name="description"]', 'content', t.meta.description)
    setMeta('meta[property="og:title"]', 'content', t.meta.title)
    setMeta('meta[property="og:description"]', 'content', t.meta.description)
    setMeta('meta[name="twitter:title"]', 'content', t.meta.title)
    setMeta('meta[name="twitter:description"]', 'content', t.meta.description)
    setMeta('meta[property="og:locale"]', 'content', seoConfig.locale[locale])
  }, [t, locale])

  return null
}
