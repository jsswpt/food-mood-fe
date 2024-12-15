import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SearchIndexProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SearchIndex = ({ isFallback }: SearchIndexProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
