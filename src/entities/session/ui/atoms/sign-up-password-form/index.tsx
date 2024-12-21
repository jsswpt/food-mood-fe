import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpPasswordFormProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpPasswordForm = ({ isFallback }: SignUpPasswordFormProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )