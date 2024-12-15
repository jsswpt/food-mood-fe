import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfileOrdersOrderProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfileOrdersOrder = ({ isFallback }: ProfileOrdersOrderProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
