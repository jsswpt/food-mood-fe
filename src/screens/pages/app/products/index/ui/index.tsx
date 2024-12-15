import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProductsIndexProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProductsIndex = ({ isFallback }: ProductsIndexProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
