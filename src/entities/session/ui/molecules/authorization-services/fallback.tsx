import { AuthorizationService } from '../../atoms'
import { Template } from './template'

export const Fallback = () => (
  <Template>
    <AuthorizationService isFallback />
    <AuthorizationService isFallback />
    <AuthorizationService isFallback />
  </Template>
)
