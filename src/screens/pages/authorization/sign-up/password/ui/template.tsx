import { Box, Container } from '@mui/material'
import React from 'react'

type TemplateProps = {
  children: React.ReactNode
}

export const Template = ({ children }: TemplateProps) => (
  <Box>
    <Container>{children}</Container>
  </Box>
)
