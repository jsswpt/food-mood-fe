import { EmailOutlined } from '@mui/icons-material'
import { Button, FilledInput, InputAdornment } from '@mui/material'

import { PasswordInput } from './password-input'
import { Template } from './template'

import { FormProps } from '@/shared/ui'

type ComponentProps = {
  formProps: FormProps['formProps']
}

export const Component = ({ formProps }: ComponentProps) => {
  return (
    <Template
      formProps={formProps}
      emailInput={
        <FilledInput
          startAdornment={
            <InputAdornment position="start">
              <EmailOutlined />
            </InputAdornment>
          }
          placeholder="Введите адрес эл. почты"
          type="email"
          size="medium"
        />
      }
      passwordInput={<PasswordInput />}
      submitButton={
        <Button variant="contained" color="primary" type="submit" size="medium">
          Войти
        </Button>
      }
    />
  )
}
