import { Form, FormProps } from '@/shared/ui'

type TemplateProps = {
  emailInput: React.ReactNode
  passwordInput: React.ReactNode
  submitButton: React.ReactNode
  formProps?: FormProps['formProps']
}

export const Template = ({
  emailInput,
  formProps,
  passwordInput,
  submitButton,
}: TemplateProps) => (
  <Form
    formProps={formProps}
    items={[
      {
        id: 'inputs',
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
                children: passwordInput,
                id: 'password',
              },
            ],
            id: 'password',
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
