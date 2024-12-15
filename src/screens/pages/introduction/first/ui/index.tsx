import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type IntroductionFirstStepProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const IntroductionFirstStep = ({
  isFallback,
}: IntroductionFirstStepProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
