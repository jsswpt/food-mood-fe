import React, { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {
  dividerText: string
  otherwise: React.ReactNode
}

type AuthFormTemplateProps = {
  children: React.ReactNode
} & (
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)
)

export const AuthFormTemplate = ({
  children,
  isFallback,
  ...rest
}: AuthFormTemplateProps) =>
  isFallback ? (
    <Fallback children={children} />
  ) : (
    <Suspense fallback={<Fallback children={children} />}>
      <Component children={children} {...(rest as Props)} />
    </Suspense>
  )
