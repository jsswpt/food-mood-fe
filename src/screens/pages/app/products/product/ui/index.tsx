import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProductsProductProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProductsProduct = ({ isFallback }: ProductsProductProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
