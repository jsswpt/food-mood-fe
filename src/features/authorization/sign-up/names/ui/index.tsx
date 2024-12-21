import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {}

type SignUpNamesProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const SignUpNames = ({ isFallback }: SignUpNamesProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
