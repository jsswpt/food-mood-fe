import { RouteObject, useRoutes } from 'react-router-dom'

import { useLocation } from '@/shared/lib/router'

const routeConfig: RouteObject[] = [
  {
    element: '/',
    path: '/',
  },
]

export const PageRouter = () => {
  const { hash, key, pagePath, queryAsString: search, state } = useLocation()

  const routes = useRoutes(routeConfig, {
    hash,
    key,
    pathname: pagePath,
    search,
    state,
  })

  return routes
}
