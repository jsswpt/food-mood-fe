import { Stack } from '@mui/material'
import React from 'react'

type TemplateProps = {
  children: React.ReactNode
}

export const Template = ({ children }: TemplateProps) => (
  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
    {children}
  </Stack>
)
