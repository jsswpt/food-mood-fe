import React, { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AuthLayoutProps = {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Suspense fallback={<Fallback children={children} />}>
    <Component children={children} />
  </Suspense>
)
