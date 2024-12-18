import { Box, Stack } from '@mui/material'
import { useGate, useUnit } from 'effector-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

import {
  $isAuthorized,
  $isRequested,
  authorizeOnAppOpenFx,
  gate,
} from '@/entities/session/model'

import { palette } from '@/shared/config/mui'
import { pxToRem } from '@/shared/lib/css-formatter'
import { Logo } from '@/shared/ui'

export type AuthGuardProps = {
  children: React.ReactNode
  reverse?: boolean
}

export const AuthGuard = ({ children, reverse }: AuthGuardProps) => {
  const [isAuthorized, isRequested, isLoading] = useUnit([
    $isAuthorized,
    $isRequested,
    authorizeOnAppOpenFx.pending,
  ])

  useGate(gate)

  if (!isRequested || isLoading) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100svh"
        bgcolor={({ palette }) => palette.primary.main}
      >
        <Stack alignItems="center" width="100%" marginBottom="15svh">
          <Box
            maxWidth={pxToRem(240)}
            width="100%"
            color={palette.primary.contrastText}
          >
            <Logo />
          </Box>
        </Stack>
      </Stack>
    )
  }

  return (reverse ? !isAuthorized : isAuthorized) ? (
    children
  ) : (
    <Navigate to={reverse ? '/' : '/authorization'} />
  )
}
