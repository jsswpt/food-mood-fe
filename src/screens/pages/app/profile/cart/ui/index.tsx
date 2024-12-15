import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfileCartProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfileCart = ({ isFallback }: ProfileCartProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
