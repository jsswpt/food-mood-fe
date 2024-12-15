import { BrowserRouter } from 'react-router-dom'

import { ModalRouter } from './modals'
import { PageRouter } from './pages'

export const Router = () => (
  <BrowserRouter>
    <ModalRouter />
    <PageRouter />
  </BrowserRouter>
)
