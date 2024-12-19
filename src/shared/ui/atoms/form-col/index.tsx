import { Stack } from '@mui/material'
import React from 'react'

export type FormColProps = {
  children: React.ReactNode
}

export const FormCol = ({ children }: FormColProps) => (
  <Stack flex={1}>{children}</Stack>
)
