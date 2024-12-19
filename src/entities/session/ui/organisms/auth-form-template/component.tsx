import React from 'react'

import { AuthorizationServices } from '../../molecules'
import { Template } from './template'

type ComponentProps = {
  children: React.ReactNode
  dividerText: string
  otherwise: React.ReactNode
}

export const Component = ({
  children,
  dividerText,
  otherwise,
}: ComponentProps) => (
  <Template
    divider={dividerText}
    authorizationServices={<AuthorizationServices />}
    otherwise={otherwise}
  >
    {children}
  </Template>
)
