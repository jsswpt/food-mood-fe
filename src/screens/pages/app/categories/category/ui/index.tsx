import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type CategoriesCategoryProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const CategoriesCategory = ({ isFallback }: CategoriesCategoryProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
