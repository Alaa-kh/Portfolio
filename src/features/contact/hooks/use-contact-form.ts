import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale } from '@/shared/hooks/use-locale'
import {
  createContactSchema,
  type ContactFormValues,
} from '@/features/contact/schemas/contact-schema'
import { sendContactMessage } from '@/features/contact/services/contact-api'

type SubmitState = 'idle' | 'success' | 'error'

export function useContactForm() {
  const { t } = useLocale()
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(createContactSchema(t)),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitState('idle')

    const result = await sendContactMessage(values)

    if (!result.ok) {
      setSubmitState('error')
      return
    }

    setSubmitState('success')
    form.reset()
  })

  return {
    form,
    onSubmit,
    submitState,
    isSubmitting: form.formState.isSubmitting,
  }
}
