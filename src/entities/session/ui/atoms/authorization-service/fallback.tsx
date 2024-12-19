import { Skeleton } from '@mui/material'

import { pxToRem } from '@/shared/lib/css-formatter'

export const Fallback = () => (
  <Skeleton variant="circular" height={pxToRem(82)} width={pxToRem(82)} />
)
