import { createEffect, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { authorizeOnAppOpenReq } from '../api'
import { User } from './types'

export const authorizeOnAppOpenFx = createEffect(authorizeOnAppOpenReq)

export const $user = createStore<User | null>(null)

export const $isAuthorized = $user.map(Boolean)

export const $isRequested = createStore(false)

export const gate = createGate()

sample({
  clock: gate.open,
  filter: (isRequested) => !isRequested,
  source: $isRequested,
  target: authorizeOnAppOpenFx,
})

sample({
  clock: authorizeOnAppOpenFx,
  fn: () => true,
  target: $isRequested,
})

sample({
  clock: authorizeOnAppOpenFx.doneData,
  target: $user,
})
