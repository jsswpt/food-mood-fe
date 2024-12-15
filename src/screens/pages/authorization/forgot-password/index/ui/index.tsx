import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ForgotPasswordProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ForgotPassword = ({ isFallback }: ForgotPasswordProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
