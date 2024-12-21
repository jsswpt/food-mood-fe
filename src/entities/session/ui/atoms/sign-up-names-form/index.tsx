import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpNamesFormProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpNamesForm = ({ isFallback }: SignUpNamesFormProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
