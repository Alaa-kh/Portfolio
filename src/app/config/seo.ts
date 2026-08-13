import { siteIdentity } from '@/shared/constants/social'

export const seoConfig = {
  title: 'Alaa Khaled | Software Developer',
  description:
    'Software developer crafting modern web, mobile, and full-stack digital experiences.',
  siteName: siteIdentity.name,
  twitterHandle: '',
  ogImagePath: '/og-image.svg',
  locale: {
    en: 'en_US',
    ar: 'ar_SA',
  },
} as const
