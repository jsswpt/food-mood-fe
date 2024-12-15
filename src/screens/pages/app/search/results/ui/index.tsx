import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SearchResultsProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SearchResults = ({ isFallback }: SearchResultsProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
