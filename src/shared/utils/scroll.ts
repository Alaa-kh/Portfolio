export function getSectionIdFromHash(hash: string): string | null {
  if (!hash.startsWith('#')) return null
  const id = hash.slice(1)
  return id.length > 0 ? id : null
}

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = 'smooth',
): boolean {
  const element = document.getElementById(sectionId)
  if (!element) return false

  element.scrollIntoView({ behavior, block: 'start' })
  return true
}

/**
 * Retries until the section exists (useful after route changes).
 */
export function scrollToSectionWhenReady(
  sectionId: string,
  options?: {
    behavior?: ScrollBehavior
    maxAttempts?: number
  },
): void {
  const behavior = options?.behavior ?? 'smooth'
  const maxAttempts = options?.maxAttempts ?? 40
  let attempts = 0

  const tryScroll = () => {
    const found = scrollToSection(sectionId, behavior)
    if (found || attempts >= maxAttempts) return
    attempts += 1
    window.setTimeout(tryScroll, 50)
  }

  tryScroll()
}
