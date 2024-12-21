import { Template } from './template'

import { SignUpPassword } from '@/features/authorization/sign-up/password'

export const Fallback = () => (
  <Template>
    <SignUpPassword isFallback />
  </Template>
)
