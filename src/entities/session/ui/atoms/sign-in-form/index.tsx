import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

import { FormProps } from '@/shared/ui'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {
  formProps: FormProps['formProps']
}

type SignInFormProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const SignInForm = ({ isFallback, ...rest }: SignInFormProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
