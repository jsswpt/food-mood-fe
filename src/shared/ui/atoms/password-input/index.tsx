import {
  LockOutlined,
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material'
import { FilledInput, IconButton, InputAdornment } from '@mui/material'
import { useEffect, useState } from 'react'

export type PasswordInputProps = {
  placeholder?: string
}

export const PasswordInput = ({ placeholder }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (showPassword) {
      const timerId = setTimeout(() => {
        setShowPassword(false)
        clearTimeout(timerId)
      }, 1500)
    }
  }, [showPassword])

  const renderIcon = showPassword ? (
    <VisibilityOffOutlined cursor="pointer" />
  ) : (
    <RemoveRedEyeOutlined cursor="pointer" />
  )

  return (
    <FilledInput
      startAdornment={
        <InputAdornment position="start">
          <LockOutlined />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={() => setShowPassword((v) => !v)} size="small">
            {renderIcon}
          </IconButton>
        </InputAdornment>
      }
      placeholder={placeholder ?? 'Введите пароль'}
      type={showPassword ? 'text' : 'password'}
      size="medium"
    />
  )
}
