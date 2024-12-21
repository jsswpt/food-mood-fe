import React from 'react'

import { Form, FormProps } from '@/shared/ui'

type TemplateProps = {
  emailInput: React.ReactNode
  phoneInput: React.ReactNode
  submitButton: React.ReactNode
  resetButton: React.ReactNode
  formProps?: FormProps['formProps']
}

export const Template = ({
  emailInput,
  formProps,
  phoneInput,
  resetButton,
  submitButton,
}: TemplateProps) => (
  <Form
    formProps={formProps}
    items={[
      {
        id: 'email-and-phone',
        rows: [
          {
            cols: [
              {
                children: emailInput,
                id: 'email',
              },
            ],
            id: 'email',
          },
          {
            cols: [
              {
                children: phoneInput,
                id: 'phone',
              },
            ],
            id: 'phone',
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
