import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type CategoriesIndexProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const CategoriesIndex = ({ isFallback }: CategoriesIndexProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
