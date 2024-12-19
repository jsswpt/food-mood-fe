import { Skeleton } from '@mui/material'

import { Template } from './template'

import { sizes } from '@/shared/config/mui'

const inputSkeleton = (
  <Skeleton variant="rectangular" height={sizes.medium} width="100%" />
)
const buttonSkeleton = (
  <Skeleton variant="rectangular" height={sizes.medium} width="100%" />
)

export const Fallback = () => (
  <Template
    emailInput={inputSkeleton}
    passwordInput={inputSkeleton}
    submitButton={buttonSkeleton}
  />
)
