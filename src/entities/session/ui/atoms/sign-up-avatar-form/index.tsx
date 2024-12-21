import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpAvatarFormProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpAvatarForm = ({ isFallback }: SignUpAvatarFormProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
