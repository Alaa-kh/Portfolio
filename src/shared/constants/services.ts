import type { LocalizedString } from '@/features/projects/types/project'

export type ServiceItem = {
  id: string
  title: LocalizedString
  description: LocalizedString
  icon: 'web' | 'mobile' | 'fullstack' | 'api' | 'ui' | 'architecture' | 'performance'
}

export const services: ServiceItem[] = [
  {
    id: 'web',
    icon: 'web',
    title: { en: 'Web Development', ar: 'تطوير الويب' },
    description: {
      en: 'Modern, responsive web applications with clean UI systems.',
      ar: 'تطبيقات ويب حديثة ومتجاوبة بأنظمة واجهة نظيفة.',
    },
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: { en: 'Mobile App Development', ar: 'تطوير تطبيقات الموبايل' },
    description: {
      en: 'Cross-platform mobile experiences with Flutter.',
      ar: 'تجارب موبايل متعددة المنصات باستخدام Flutter.',
    },
  },
  {
    id: 'fullstack',
    icon: 'fullstack',
    title: { en: 'Full-Stack Development', ar: 'تطوير Full-Stack' },
    description: {
      en: 'End-to-end product delivery across frontend and backend layers.',
      ar: 'تسليم منتجات من البداية للنهاية عبر طبقات الواجهة والخلفية.',
    },
  },
  {
    id: 'api',
    icon: 'api',
    title: { en: 'API Integration', ar: 'تكامل الـ APIs' },
    description: {
      en: 'Reliable integrations with REST APIs and third-party services.',
      ar: 'تكاملات موثوقة مع REST APIs والخدمات الخارجية.',
    },
  },
  {
    id: 'ui',
    icon: 'ui',
    title: { en: 'UI Implementation', ar: 'تنفيذ واجهات المستخدم' },
    description: {
      en: 'Pixel-aware UI implementation with accessibility and polish.',
      ar: 'تنفيذ واجهات بدقة مع إمكانية وصول وصقل بصري.',
    },
  },
  {
    id: 'architecture',
    icon: 'architecture',
    title: { en: 'Software Architecture', ar: 'هندسة البرمجيات' },
    description: {
      en: 'Clean architecture, modular structure, and maintainable systems.',
      ar: 'هندسة نظيفة وهيكل معياري وأنظمة قابلة للصيانة.',
    },
  },
  {
    id: 'performance',
    icon: 'performance',
    title: { en: 'Performance Optimization', ar: 'تحسين الأداء' },
    description: {
      en: 'Faster interfaces through thoughtful rendering and asset strategy.',
      ar: 'واجهات أسرع عبر عرض مدروس واستراتيجية أصول محسّنة.',
    },
  },
]
