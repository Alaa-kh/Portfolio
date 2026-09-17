import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { NavItemId } from '@/shared/constants/navigation'

const SECTION_IDS: NavItemId[] = [
  'home',
  'projects',
  'about',
  'skills',
  'services',
  'contact',
]

export function useScrollSpy(offset = 120): NavItemId {
  const location = useLocation()
  const [activeId, setActiveId] = useState<NavItemId>('home')

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const hashId = location.hash.replace('#', '') as NavItemId
    if (SECTION_IDS.includes(hashId)) {
      setActiveId(hashId)
    }

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]
        if (top?.target.id) {
          setActiveId(top.target.id as NavItemId)
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.15, 0.35, 0.55],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.hash, location.pathname, offset])

  return activeId
}
