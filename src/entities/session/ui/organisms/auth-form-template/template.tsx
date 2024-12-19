import { Divider, Stack } from '@mui/material'
import React from 'react'

import { pxToRem } from '@/shared/lib/css-formatter'
import { FormBlock, FormCol, FormRow, FormWrapper } from '@/shared/ui'

type TemplateProps = {
  children: React.ReactNode
  divider: React.ReactNode
  authorizationServices: React.ReactNode
  otherwise: React.ReactNode
}

export const Template = ({
  authorizationServices,
  children,
  divider,
  otherwise,
}: TemplateProps) => (
  <Stack gap={pxToRem(32)}>
    {children}
    <FormWrapper>
      <FormBlock>
        <FormRow>
          <FormCol>
            <Divider>{divider}</Divider>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>{authorizationServices}</FormCol>
        </FormRow>
      </FormBlock>
    </FormWrapper>
    <Stack alignItems="center">{otherwise}</Stack>
  </Stack>
)
