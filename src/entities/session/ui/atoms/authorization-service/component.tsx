import { Box, Stack } from '@mui/material'
import { JSX } from 'react'

import { pxToRem } from '@/shared/lib/css-formatter'

export type ComponentProps = {
  color: string
  icon: JSX.Element
}

export const Component = ({ color, icon }: ComponentProps) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    width={pxToRem(82)}
    height={pxToRem(82)}
    borderRadius="50%"
    sx={{ borderColor: color, borderStyle: 'solid', borderWidth: pxToRem(2) }}
  >
    <Box
      height={pxToRem(20)}
      sx={{
        '&>*': {
          height: '100%',
        },
        color,
      }}
    >
      {icon}
    </Box>
  </Stack>
)
