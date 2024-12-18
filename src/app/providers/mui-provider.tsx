import { CssBaseline, ThemeProvider } from '@mui/material'
import { JSX } from 'react'

import { theme } from '@/shared/config/mui'

export type MuiProviderProps = {
  children: JSX.Element
}

export const MuiProvider = ({ children }: MuiProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
