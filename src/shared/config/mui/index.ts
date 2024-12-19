import { createTheme } from '@mui/material'

import { pxToRem } from '@/shared/lib/css-formatter'

export const palette = {
  primary: {
    contrastText: '#FFF2DE',
    main: '#FF9D01',
  },
} as const

export const spacing = {
  appbarHeightXs: 64,
} as const

export const sizes = {
  large: pxToRem(56),
  medium: pxToRem(44),
  small: pxToRem(32),
}

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: { height: sizes.large },
        sizeMedium: { height: sizes.medium },
        sizeSmall: { height: sizes.small },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: `0 ${pxToRem(24)}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          paddingLeft: pxToRem(16),
          paddingRight: pxToRem(16),
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          paddingBottom: 0,
          paddingTop: 0,
        },
        root: {
          height: sizes.large,
        },
        underline: {
          '&::before, &::after': {
            display: 'none',
          },
        },
      },
      variants: [
        {
          props: { size: 'medium' },
          style: {
            height: sizes.medium,
          },
        },
        {
          props: { size: 'small' },
          style: {
            height: sizes.small,
          },
        },
      ],
    },
  },
  palette: {
    ...palette,
    background: {
      paper: '#F5F5F5',
    },
    text: { primary: '#161616' },
  },
  shape: { borderRadius: 0 },
  spacing: pxToRem,
  typography: {
    allVariants: {
      lineHeight: '125%',
    },
  },
})
