import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type ProfileAddressesProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const ProfileAddresses = ({ isFallback }: ProfileAddressesProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
