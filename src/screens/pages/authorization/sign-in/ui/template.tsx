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
        dividerText="Или войдите через"
        otherwise={
          <Typography variant="caption" textAlign="center">
            Ещё нет аккаунта?{' '}
            <Link
              component={RouterLink}
              to="/authorization/sign-up"
              underline="none"
            >
              Зарегистрируйтесь
            </Link>
          </Typography>
        }
      >
        {children}
      </AuthFormTemplate>
    </Container>
  </Box>
)
