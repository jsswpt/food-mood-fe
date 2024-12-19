import { JSX, lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {
  color: string
  icon: JSX.Element
}

type AuthorizationServiceProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const AuthorizationService = ({
  isFallback,
  ...rest
}: AuthorizationServiceProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
