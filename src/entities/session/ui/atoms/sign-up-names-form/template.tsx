import React from 'react'

import { Form, FormProps } from '@/shared/ui'

type TemplateProps = {
  firstNameInput: React.ReactNode
  lastNameInput: React.ReactNode
  submitButton: React.ReactNode
  formProps?: FormProps['formProps']
}

export const Template = ({
  firstNameInput,
  formProps,
  lastNameInput,
  submitButton,
}: TemplateProps) => (
  <Form
    formProps={formProps}
    items={[
      {
        id: 'names',
        rows: [
          {
            cols: [
              {
                children: firstNameInput,
                id: 'first-name',
              },
            ],
            id: 'first-name',
          },
          {
            cols: [
              {
                children: lastNameInput,
                id: 'last-name',
              },
            ],
            id: 'last-name',
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
        ],
      },
    ]}
  />
)
