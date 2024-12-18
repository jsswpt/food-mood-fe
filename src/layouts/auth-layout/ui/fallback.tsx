import { Skeleton } from '@mui/material'
import React from 'react'

import { Template } from './template'

type FallbackProps = {
  children: React.ReactNode
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template title={<Skeleton width="88%" />} children={children} />
)
