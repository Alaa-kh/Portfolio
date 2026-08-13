import { z } from 'zod'
import type { TranslationDictionary } from '@/shared/locales/types'

export function createContactSchema(t: TranslationDictionary) {
  return z.object({
    name: z.string().trim().min(1, t.contact.validation.nameRequired),
    email: z
      .string()
      .trim()
      .min(1, t.contact.validation.emailRequired)
      .email(t.contact.validation.emailInvalid),
    message: z
      .string()
      .trim()
      .min(1, t.contact.validation.messageRequired)
      .min(20, t.contact.validation.messageMin),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>
