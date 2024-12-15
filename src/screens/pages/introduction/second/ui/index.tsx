import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type IntroductionSecondStepProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const IntroductionSecondStep = ({
  isFallback,
}: IntroductionSecondStepProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
