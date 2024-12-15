import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfileIndexProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfileIndex = ({ isFallback }: ProfileIndexProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
