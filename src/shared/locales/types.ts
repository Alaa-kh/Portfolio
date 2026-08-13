export type Locale = 'en' | 'ar'

export type TranslationDictionary = {
  meta: {
    title: string
    description: string
  }
  brand: {
    name: string
    role: string
  }
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    services: string
    contact: string
    openMenu: string
    closeMenu: string
    cta: string
  }
  theme: {
    light: string
    dark: string
    toggle: string
  }
  language: {
    label: string
    en: string
    ar: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    highlights: string[]
    viewWork: string
    contact: string
    visualLabel: string
  }
  about: {
    eyebrow: string
    title: string
    summary: string
    approachTitle: string
    approach: string
    expertiseTitle: string
    expertise: string[]
    stats: {
      years: string
      projects: string
      technologies: string
      apps: string
    }
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    categories: {
      frontend: string
      backend: string
      mobile: string
      tools: string
    }
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    featuredLabel: string
    allTitle: string
    viewLive: string
    viewDetails: string
    viewProject: string
    technologies: string
    problem: string
    solution: string
    features: string
    challenges: string
    results: string
    github: string
    close: string
    backHome: string
  }
  services: {
    eyebrow: string
    title: string
    description: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    emailLabel: string
    socialTitle: string
    formTitle: string
    formNote: string
    name: string
    email: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    submit: string
    submitting: string
    success: string
    error: string
    validation: {
      nameRequired: string
      emailRequired: string
      emailInvalid: string
      messageRequired: string
      messageMin: string
    }
  }
  footer: {
    description: string
    navigation: string
    social: string
    rights: string
  }
  common: {
    backToTop: string
    loading: string
    empty: string
  }
}
