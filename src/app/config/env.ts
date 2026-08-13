/**
 * Central place for non-secret runtime config.
 * Never put secrets in VITE_* variables.
 */
export const env = {
  appName: 'Alaa Khaled Portfolio',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const
