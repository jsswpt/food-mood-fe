import { Template } from './template'

import { SignUpEmailAndPhone } from '@/features/authorization/sign-up/email-and-phone'

export const Fallback = () => (
  <Template>
    <SignUpEmailAndPhone isFallback />
  </Template>
)
