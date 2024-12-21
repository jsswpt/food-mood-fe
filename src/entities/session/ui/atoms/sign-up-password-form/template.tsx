import React from 'react'

import { Form, FormProps } from '@/shared/ui'

type TemplateProps = {
  passwordInput: React.ReactNode
  passwordConfirmation: React.ReactNode
  submitButton: React.ReactNode
  resetButton: React.ReactNode
  formProps?: FormProps['formProps']
}

export const Template = ({
  formProps,
  passwordConfirmation,
  passwordInput,
  resetButton,
  submitButton,
}: TemplateProps) => (
  <Form
    formProps={formProps}
    items={[
      {
        id: 'passwords',
        rows: [
          {
            cols: [
              {
                children: passwordInput,
                id: 'password',
              },
            ],
            id: 'password',
          },
          {
            cols: [
              {
                children: passwordConfirmation,
                id: 'confirmation',
              },
            ],
            id: 'confirmation',
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
