import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SignUpAvatarProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SignUpAvatar = ({ isFallback }: SignUpAvatarProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
