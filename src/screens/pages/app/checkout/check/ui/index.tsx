import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type CheckoutCheckProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const CheckoutCheck = ({ isFallback }: CheckoutCheckProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
