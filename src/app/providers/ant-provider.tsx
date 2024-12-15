import { ConfigProvider } from 'antd'
import { JSX } from 'react'

import { theme } from '@/shared/config/antd'

export type AntProviderProps = {
  children: JSX.Element
}

export const AntProvider = ({ children }: AntProviderProps) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
)
