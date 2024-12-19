import { Stack } from '@mui/material'
import React from 'react'

import { pxToRem } from '@/shared/lib/css-formatter'

export type FormWrapperProps = {
  children: React.ReactNode
}

export const FormWrapper = ({ children }: FormWrapperProps) => (
  <Stack gap={pxToRem(24)}>{children}</Stack>
)
