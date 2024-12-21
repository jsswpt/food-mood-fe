import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpEmailOrPhoneProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpEmailOrPhone = ({ isFallback }: SignUpEmailOrPhoneProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
