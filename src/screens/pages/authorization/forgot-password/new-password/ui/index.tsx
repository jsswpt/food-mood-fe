import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type NewPasswordProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const NewPassword = ({ isFallback }: NewPasswordProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
