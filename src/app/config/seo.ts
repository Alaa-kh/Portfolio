import { siteIdentity } from '@/shared/constants/social'

export const seoConfig = {
  title: 'Alaa Khaled | Software Developer',
  description:
    'Software developer crafting modern web and mobile digital experiences.',
  siteName: siteIdentity.name,
  twitterHandle: '',
  ogImagePath: '/og-image.svg',
  locale: {
    en: 'en_US',
    ar: 'ar_SA',
  },
} as const
