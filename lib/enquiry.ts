export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors: Partial<Record<'name' | 'email' | 'message', string>>
}

export const initialEnquiryState: EnquiryState = {
  status: 'idle',
  message: '',
  errors: {},
}
