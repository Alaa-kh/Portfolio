export type LocalizedString = {
  en: string
  ar: string
}

export type LocalizedStringList = {
  en: string[]
  ar: string[]
}

export type Project = {
  id: string
  slug: string
  title: string
  categoryKey: string
  category: LocalizedString
  shortDescription: LocalizedString
  description: LocalizedString
  problem: LocalizedString
  solution: LocalizedString
  features: LocalizedStringList
  challenges: LocalizedStringList
  results: LocalizedStringList
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  featured?: boolean
}
