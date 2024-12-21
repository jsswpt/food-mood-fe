import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { AuthFormTemplate } from '@/entities/session'

type TemplateProps = {
  children: React.ReactNode
}

export const Template = ({ children }: TemplateProps) => (
  <Box>
    <Container>
      <AuthFormTemplate
        dividerText="Или зарегистрируйтесь с помощью"
        otherwise={
          <Typography variant="caption" textAlign="center">
            Уже есть аккаунт?{' '}
            <Link component={RouterLink} to="/authorization" underline="none">
              Войдите
            </Link>
          </Typography>
        }
      >
        {children}
      </AuthFormTemplate>
    </Container>
  </Box>
)
