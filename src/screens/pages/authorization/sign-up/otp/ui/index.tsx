import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpOtpProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpOtp = ({ isFallback }: SignUpOtpProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
