import { Stack } from '@mui/material'
import React from 'react'

import { pxToRem } from '@/shared/lib/css-formatter'

export type FormRowProps = {
  children: React.ReactNode
}

export const FormRow = ({ children }: FormRowProps) => (
  <Stack direction="row" gap={pxToRem(8)}>
    {children}
  </Stack>
)
