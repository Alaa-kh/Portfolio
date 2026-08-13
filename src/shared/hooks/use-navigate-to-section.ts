import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSectionWhenReady } from '@/shared/utils/scroll'

/**
 * Navigates to homepage sections from any route.
 * Works on `/` and nested pages like `/projects/:slug`.
 */
export function useNavigateToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (sectionId: string) => {
      const hash = `#${sectionId}`
      const onHome = location.pathname === '/'

      if (onHome) {
        if (location.hash !== hash) {
          navigate({ pathname: '/', hash }, { replace: false })
        }
        scrollToSectionWhenReady(sectionId)
        return
      }

      navigate({ pathname: '/', hash })
      // ScrollManager also handles this after home mounts.
      scrollToSectionWhenReady(sectionId)
    },
    [location.hash, location.pathname, navigate],
  )
}
