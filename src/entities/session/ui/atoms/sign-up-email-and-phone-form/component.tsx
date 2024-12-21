import { EmailOutlined, PhoneOutlined } from '@mui/icons-material'
import { Button, FilledInput, InputAdornment } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <Template
    emailInput={
      <FilledInput
        size="medium"
        placeholder="Введите адрес эл. почты"
        startAdornment={
          <InputAdornment position="start">
            <EmailOutlined />
          </InputAdornment>
        }
      />
    }
    phoneInput={
      <FilledInput
        size="medium"
        placeholder="Введите телефон"
        startAdornment={
          <InputAdornment position="start">
            <PhoneOutlined />
          </InputAdornment>
        }
      />
    }
    submitButton={
      <Button
        component={RouterLink}
        to="/authorization/sign-up/avatar"
        variant="contained"
        color="primary"
      >
        Далее
      </Button>
    }
    resetButton={
      <Button
        component={RouterLink}
        to="/authorization/sign-up"
        variant="text"
        color="inherit"
      >
        Назад
      </Button>
    }
  />
)
