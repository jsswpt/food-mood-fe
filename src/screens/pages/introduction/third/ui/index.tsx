import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type IntroductionThirdStepProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const IntroductionThirdStep = ({
  isFallback,
}: IntroductionThirdStepProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
