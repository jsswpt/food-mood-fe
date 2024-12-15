import { useMemo } from 'react'
import { Location, useLocation as useRouterDomLocation } from 'react-router-dom'

type Query = Record<string, string>

type UseLocation = {
  (): {
    pagePath: string
    modalPath?: string
    query?: Query
    queryAsString?: string
  } & Omit<Location, 'pathname' | 'search'>
}

const removeLastSlash = (value: string) => value.substring(0, value.length - 1)

export const useLocation: UseLocation = () => {
  const { hash, key, pathname, search, state } = useRouterDomLocation()

  let [pagePath, modalPath] = pathname.split('~')

  if (modalPath && modalPath[modalPath.length - 1] === '/') {
    modalPath = removeLastSlash(modalPath)
  }

  if (pagePath[pagePath.length - 1] === '/') {
    pagePath = removeLastSlash(pagePath)
  }

  const query: Query = useMemo(
    () =>
      search.split('&').reduce((acc, curr) => {
        const splitted = curr.split('=')

        let [key] = splitted
        const [, value] = splitted

        if (key[0] === '?') {
          key = key.substring(1, key.length)
        }

        return { ...acc, [key]: value }
      }, {}),
    [search]
  )

  return { hash, key, modalPath, pagePath, query, queryAsString: search, state }
}