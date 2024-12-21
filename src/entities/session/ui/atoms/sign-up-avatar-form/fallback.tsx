import { Skeleton } from '@mui/material'

import { Template } from './template'

import { sizes } from '@/shared/config/mui'
import { pxToRem } from '@/shared/lib/css-formatter'

const inputSkeleton = (
  <Skeleton variant="circular" height={pxToRem(82)} width={pxToRem(82)} />
)
const buttonSkeleton = (
  <Skeleton variant="rectangular" height={sizes.medium} width="100%" />
)

export const Fallback = () => (
  <Template
    avatarInput={inputSkeleton}
    submitButton={buttonSkeleton}
    resetButton={buttonSkeleton}
  />
)
