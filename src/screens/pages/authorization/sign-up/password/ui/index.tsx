import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpPasswordProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpPassword = ({ isFallback }: SignUpPasswordProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
