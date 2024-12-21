import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpEmailAndPhoneFormProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpEmailAndPhoneForm = ({
  isFallback,
}: SignUpEmailAndPhoneFormProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
