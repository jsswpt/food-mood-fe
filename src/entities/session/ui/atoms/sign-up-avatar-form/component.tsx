import { Avatar, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

import { pxToRem } from '@/shared/lib/css-formatter'

export const Component = () => (
  <Template
    avatarInput={
      <>
        <label htmlFor="avatar-input">
          <Avatar sx={{ height: pxToRem(82), width: pxToRem(82) }} />
        </label>
        <input id="avatar-input" type="file" accept="image/*" hidden />
      </>
    }
    submitButton={
      <Button
        component={RouterLink}
        to="/authorization/sign-up/password"
        variant="contained"
        color="primary"
      >
        Далее
      </Button>
    }
    resetButton={
      <Button
        component={RouterLink}
        to="/authorization/sign-up/email-and-phone"
        variant="text"
        color="inherit"
      >
        Назад
      </Button>
    }
  />
)
