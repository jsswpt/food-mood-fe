import { createTheme } from '@mui/material'

import { pxToRem } from '@/shared/lib/css-formatter'

export const palette = {
  primary: {
    contrastText: '#FFF2DE',
    main: '#FF9D01',
  },
}

export const theme = createTheme({
  palette: {
    ...palette,
    background: {
      paper: '#F5F5F5',
    },
    text: { primary: '#161616' },
  },
  shape: { borderRadius: 0 },
  spacing: pxToRem,
  typography: {},
})
