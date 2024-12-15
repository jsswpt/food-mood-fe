import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type CheckoutAddressProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const CheckoutAddress = ({ isFallback }: CheckoutAddressProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
