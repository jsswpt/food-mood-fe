import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type CheckoutPaymentProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const CheckoutPayment = ({ isFallback }: CheckoutPaymentProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
