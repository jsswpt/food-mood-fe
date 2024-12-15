import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type IntroductionFourthStepProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const IntroductionFourthStep = ({
  isFallback,
}: IntroductionFourthStepProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
