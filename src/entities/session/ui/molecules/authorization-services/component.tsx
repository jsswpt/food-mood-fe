import { Link } from '@mui/material'

import { AuthorizationService } from '../../atoms'
import { Template } from './template'

import { AppleLogo, FacebookLogo, GoogleLogo } from '@/shared/ui'

// TODO: Сделать ссылки кликабельными
export const Component = () => (
  <Template>
    <Link>
      <AuthorizationService icon={<GoogleLogo />} color="#DB4437" />
    </Link>
    <Link>
      <AuthorizationService icon={<FacebookLogo />} color="#4267B2" />
    </Link>
    <Link>
      <AuthorizationService icon={<AppleLogo />} color="#161616" />
    </Link>
  </Template>
)
