import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from '@/app/providers/locale-provider'
import { ThemeProvider } from '@/app/providers/theme-provider'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename || undefined}>
      <ThemeProvider>
        <LocaleProvider>{children}</LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
