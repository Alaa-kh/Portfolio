export type NavItemId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'services'
  | 'contact'

export type NavItem = {
  id: NavItemId
  href: string
}

export const navigationItems: NavItem[] = [
  { id: 'home', href: '#home' },
  { id: 'about', href: '#about' },
  { id: 'skills', href: '#skills' },
  { id: 'projects', href: '#projects' },
  { id: 'services', href: '#services' },
  { id: 'contact', href: '#contact' },
]
