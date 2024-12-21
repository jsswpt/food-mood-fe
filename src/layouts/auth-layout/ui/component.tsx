import React, { useMemo } from 'react'

import { Template } from './template'

import { Path, useLocation } from '@/shared/lib/router'

type ComponentProps = {
  children: React.ReactNode
}

const pathToComponents: Record<
  Path,
  { title: React.ReactNode; subtitle: React.ReactNode }
> = {
  '/authorization': {
    subtitle: null,
    title: 'Вход',
  },
  '/authorization/sign-up': {
    subtitle: null,
    title: 'Регистрация',
  },
  '/authorization/sign-up/avatar': {
    subtitle: 'Вы можете загрузить аватар позже',
    title: 'Загрузка аватара',
  },
  '/authorization/sign-up/email-and-phone': {
    subtitle:
      'Укажите номер телефона или адрес эл. почты, либо можете указать и то и другое 🙂‍↔️',
    title: 'Привязка аккаунта',
  },
  '/authorization/sign-up/password': {
    subtitle: null,
    title: 'Пароль',
  },
}

export const Component = ({ children }: ComponentProps) => {
  const { pagePath } = useLocation()

  const { subtitle, title } = useMemo(
    () =>
      pagePath in pathToComponents
        ? pathToComponents[pagePath]
        : { subtitle: null, title: null },
    [pagePath]
  )

  return <Template children={children} title={title} subtitle={subtitle} />
}
