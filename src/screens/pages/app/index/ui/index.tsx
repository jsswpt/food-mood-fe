import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AppIndexProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const AppIndex = ({ isFallback }: AppIndexProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
