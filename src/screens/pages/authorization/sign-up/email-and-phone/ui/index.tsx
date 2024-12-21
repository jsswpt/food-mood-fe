import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpEmailAndPhoneProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpEmailAndPhone = ({
  isFallback,
}: SignUpEmailAndPhoneProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
