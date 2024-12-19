import { Stack } from '@mui/material'
import React from 'react'

import { pxToRem } from '@/shared/lib/css-formatter'

export type FormBlockProps = {
  children: React.ReactNode
}

export const FormBlock = ({ children }: FormBlockProps) => (
  <Stack gap={pxToRem(16)}>{children}</Stack>
)
