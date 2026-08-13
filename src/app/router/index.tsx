import { useEffect, useRef } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { HomePage } from '@/features/home/pages/home-page'
import { ProjectDetailsPage } from '@/features/projects/pages/project-details-page'
import { BackToTopButton } from '@/shared/components/layout/back-to-top'
import { ScrollProgress } from '@/shared/components/layout/scroll-progress'
import { SiteFooter } from '@/shared/components/layout/site-footer'
import { SiteHeader } from '@/shared/components/layout/site-header'
import { PageTransition } from '@/shared/components/motion/page-transition'
import { DocumentHead } from '@/shared/components/seo/document-head'
import {
  getSectionIdFromHash,
  scrollToSectionWhenReady,
} from '@/shared/utils/scroll'

function isPageReload(): boolean {
  const entry = performance.getEntriesByType(
    'navigation',
  )[0] as PerformanceNavigationTiming | undefined
  return entry?.type === 'reload'
}

function ScrollManager() {
  const location = useLocation()
  const navigate = useNavigate()
  const isFirstEffect = useRef(true)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // Hard refresh / first paint: always start from the top of the site.
    if (isFirstEffect.current) {
      isFirstEffect.current = false

      if (isPageReload() && location.hash) {
        navigate(
          { pathname: location.pathname, search: location.search, hash: '' },
          { replace: true },
        )
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const sectionId = getSectionIdFromHash(location.hash)
    if (sectionId) {
      scrollToSectionWhenReady(sectionId)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [
    location.hash,
    location.pathname,
    location.search,
    location.key,
    navigate,
  ])

  return null
}

export function AppRouter() {
  return (
    <>
      <DocumentHead />
      <ScrollProgress />
      <ScrollManager />
      <SiteHeader />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
      <SiteFooter />
      <BackToTopButton />
    </>
  )
}
