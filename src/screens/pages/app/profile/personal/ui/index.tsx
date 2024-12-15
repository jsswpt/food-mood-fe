import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfilePersonalProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfilePersonal = ({ isFallback }: ProfilePersonalProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
