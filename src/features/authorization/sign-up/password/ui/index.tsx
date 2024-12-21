import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {}

type SignUpPasswordProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const SignUpPassword = ({ isFallback }: SignUpPasswordProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
