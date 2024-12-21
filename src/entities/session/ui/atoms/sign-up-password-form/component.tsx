import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

import { PasswordInput } from '@/shared/ui'

export const Component = () => (
  <Template
    passwordInput={<PasswordInput />}
    passwordConfirmation={<PasswordInput placeholder="Повторите пароль" />}
    submitButton={
      <Button variant="contained" color="primary">
        Создать аккаунт
      </Button>
    }
    resetButton={
      <Button
        component={RouterLink}
        to="/authorization/sign-up/avatar"
        variant="text"
        color="inherit"
      >
        Назад
      </Button>
    }
  />
)
