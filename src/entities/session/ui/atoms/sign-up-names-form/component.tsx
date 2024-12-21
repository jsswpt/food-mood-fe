import { Button, FilledInput } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <Template
    firstNameInput={<FilledInput size="medium" placeholder="Введите имя" />}
    lastNameInput={<FilledInput size="medium" placeholder="Введите фамилию" />}
    submitButton={
      <Button
        component={RouterLink}
        to="/authorization/sign-up/email-and-phone"
        variant="contained"
        color="primary"
      >
        Далее
      </Button>
    }
  />
)
