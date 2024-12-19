import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { palette, spacing } from '@/shared/config/mui'
import { pxToRem } from '@/shared/lib/css-formatter'

type TemplateProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
}

export const Template = ({ children, subtitle, title }: TemplateProps) => (
  <Stack
    paddingTop={pxToRem(spacing.appbarHeightXs + 48)}
    paddingBottom={pxToRem(48)}
    justifyContent="space-between"
    minHeight="100svh"
  >
    <Stack alignItems="center" gap={pxToRem(8)}>
      <Typography
        component="h1"
        variant="h5"
        color={palette.primary.main}
        textAlign="center"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="textPrimary"
          textAlign="center"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {subtitle}
        </Typography>
      )}
    </Stack>
    <Box>{children}</Box>
  </Stack>
)
