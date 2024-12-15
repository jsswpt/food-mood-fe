import { AntProvider } from './providers'

import { Router } from '@/screens'

export const App = () => (
  <AntProvider>
    <Router />
  </AntProvider>
)
