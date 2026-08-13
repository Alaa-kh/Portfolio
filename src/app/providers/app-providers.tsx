import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from '@/app/providers/locale-provider'
import { ThemeProvider } from '@/app/providers/theme-provider'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LocaleProvider>{children}</LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
