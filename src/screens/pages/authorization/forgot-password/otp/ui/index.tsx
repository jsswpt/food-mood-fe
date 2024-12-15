import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ForgotPasswordOtpProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ForgotPasswordOtp = ({ isFallback }: ForgotPasswordOtpProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
