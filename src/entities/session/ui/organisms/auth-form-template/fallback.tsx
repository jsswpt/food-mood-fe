import { Skeleton } from '@mui/material'
import React from 'react'

import { AuthorizationServices } from '../../molecules'
import { Template } from './template'

type FallbackProps = {
  children: React.ReactNode
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template
    children={children}
    authorizationServices={<AuthorizationServices isFallback />}
    divider={<Skeleton width="9rem" />}
    otherwise={<Skeleton width="15rem" />}
  />
)
