import { Stack } from '@mui/material'
import React from 'react'

import { Form, FormProps } from '@/shared/ui'

type TemplateProps = {
  avatarInput: React.ReactNode
  submitButton: React.ReactNode
  resetButton: React.ReactNode
  formProps?: FormProps['formProps']
}

export const Template = ({
  avatarInput,
  formProps,
  resetButton,
  submitButton,
}: TemplateProps) => (
  <Form
    formProps={formProps}
    items={[
      {
        id: 'avatar',
        rows: [
          {
            cols: [
              {
                children: <Stack alignItems="center">{avatarInput}</Stack>,
                id: 'avatar',
              },
            ],
            id: 'avatar',
          },
          {
            cols: [
              {
                children: <></>,
                id: 'empty',
              },
            ],
            id: 'empty',
          },
          {
            cols: [
              {
                children: <></>,
                id: 'empty-2',
              },
            ],
            id: 'empty-2',
          },
        ],
      },
      {
        id: 'buttons',
        rows: [
          {
            cols: [
              {
                children: submitButton,
                id: 'submit',
              },
            ],
            id: 'submit',
          },
          {
            cols: [
              {
                children: resetButton,
                id: 'reset',
              },
            ],
            id: 'reset',
          },
        ],
      },
    ]}
  />
)
