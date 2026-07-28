'use server'

import type { EnquiryState } from '@/lib/enquiry'

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const budget = String(formData.get('budget') ?? '').trim()

  const errors: EnquiryState['errors'] = {}

  if (name.length < 2) {
    errors.name = 'Please tell me your name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'A valid email address is required.'
  }
  if (message.length < 20) {
    errors.message = 'A little more detail helps — at least 20 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Something needs fixing before this can send.',
      errors,
    }
  }

  // Enquiry received. Connect a database or email provider to persist or
  // forward this — right now it is validated and acknowledged only.
  console.log('[v0] New enquiry:', { name, email, budget })

  return {
    status: 'success',
    message: `Thanks ${name.split(' ')[0]} — your enquiry is in. I reply to every project email within two working days.`,
    errors: {},
  }
}
