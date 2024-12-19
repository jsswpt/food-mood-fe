import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AuthorizationServicesProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const AuthorizationServices = ({
  isFallback,
}: AuthorizationServicesProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
