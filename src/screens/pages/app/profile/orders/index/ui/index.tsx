import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfileOrdersIndexProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfileOrdersIndex = ({ isFallback }: ProfileOrdersIndexProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
