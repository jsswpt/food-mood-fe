import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfileFavoritesProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfileFavorites = ({ isFallback }: ProfileFavoritesProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
