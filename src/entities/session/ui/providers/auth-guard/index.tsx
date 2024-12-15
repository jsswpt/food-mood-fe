import Icon from '@ant-design/icons'
import { Flex } from 'antd'
import { useGate, useUnit } from 'effector-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

import st from './styles.module.scss'

import {
  $isAuthorized,
  $isRequested,
  authorizeOnAppOpenFx,
  gate,
} from '@/entities/session/model'

import { Logo } from '@/shared/ui'

export type AuthGuardProps = {
  children: React.ReactNode
  reverse?: boolean
}

export const AuthGuard = ({ children, reverse }: AuthGuardProps) => {
  const [isAuthorized, isRequested, isLoading] = useUnit([
    $isAuthorized,
    $isRequested,
    authorizeOnAppOpenFx.pending,
  ])

  useGate(gate)

  if (!isRequested || isLoading) {
    return (
      <Flex align="center" justify="center" className={st.wrapper}>
        <Icon component={Logo} className={st.logo} />
      </Flex>
    )
  }

  return (reverse ? !isAuthorized : isAuthorized) ? (
    children
  ) : (
    <Navigate to={reverse ? '/' : '/authorization'} />
  )
}
