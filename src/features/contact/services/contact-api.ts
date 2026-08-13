import { CONTACT_EMAIL } from '@/shared/constants/social'
import type { ContactFormValues } from '@/features/contact/schemas/contact-schema'

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; message: string }

/**
 * Sends contact messages via FormSubmit (managed email relay).
 * First-time use requires confirming the activation email sent to CONTACT_EMAIL.
 */
export async function sendContactMessage(
  values: ContactFormValues,
): Promise<ContactSubmitResult> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
        _subject: `Portfolio contact from ${values.name}`,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    const data: unknown = await response.json().catch(() => null)

    if (!response.ok) {
      const message =
        typeof data === 'object' &&
        data !== null &&
        'message' in data &&
        typeof data.message === 'string'
          ? data.message
          : 'Request failed'
      return { ok: false, message }
    }

    return { ok: true }
  } catch {
    return { ok: false, message: 'Network error' }
  }
}
