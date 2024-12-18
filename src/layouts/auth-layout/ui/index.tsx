import React, { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AuthTemplateProps = {
  children: React.ReactNode
}

export const AuthTemplate = ({ children }: AuthTemplateProps) => (
  <Suspense fallback={<Fallback children={children} />}>
    <Component children={children} />
  </Suspense>
)
