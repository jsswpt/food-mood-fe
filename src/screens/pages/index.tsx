import { Outlet, RouteObject, useRoutes } from 'react-router-dom'

import { useLocation } from '@/shared/lib/router'

const routeConfig: RouteObject[] = [
  // Introduction
  {
    children: [
      {
        element: '1',
        path: '1',
      },
      {
        element: '2',
        path: '2',
      },
      {
        element: '3',
        path: '3',
      },
      {
        element: '4',
        path: '4',
      },
    ],
    element: (
      <div>
        <div>Introduction</div>
        <div>
          <Outlet />
        </div>
      </div>
    ),
    path: '/introduction',
  },
  // Authorization
  {
    children: [
      {
        element: 'Sign-in',
        path: 'sign-in',
      },
      {
        children: [
          {
            element: 'Sign-up',
            index: true,
          },
          {
            element: 'Enter OTP',
            path: 'otp',
          },
        ],
        element: (
          <div>
            <h1>Sign-up</h1>
            <div>
              <Outlet />
            </div>
          </div>
        ),
        path: 'sign-up',
      },
      {
        children: [
          { element: 'Forgot password', index: true },
          { element: 'OTP Sent', path: 'otp' },
          {
            children: [
              {
                element: 'Success',
                path: 'success',
              },
            ],
            element: 'New password',
            path: 'new-password',
          },
        ],
        element: (
          <div>
            <h1>Forgot password</h1>
            <div>
              <Outlet />
            </div>
          </div>
        ),
        path: 'forgot-password',
      },
    ],
    element: (
      <div>
        <h1>Authorization</h1>
        <div>
          <Outlet />
        </div>
      </div>
    ),
    path: '/authorization',
  },
  // App
  {
    children: [
      // Home
      {
        element: 'Index',
        index: true,
      },
      // Categories
      {
        children: [
          // Categories index
          {
            element: 'Categories',
            index: true,
          },
          // Category
          {
            element: 'CategoryId',
            path: ':categoryId',
          },
        ],
        element: <Outlet />,
        path: 'categories',
      },
      // Products
      {
        children: [
          // Products index
          {
            element: 'Products',
            index: true,
          },
          // Product
          {
            element: 'ProductId',
            path: ':productId',
          },
        ],
        element: <Outlet />,
        path: 'products',
      },
      // Search
      {
        children: [
          // Search index
          {
            element: 'Search',
            index: true,
          },
          // Search results
          {
            element: 'Search results',
            path: 'results',
          },
        ],
        element: <Outlet />,
        path: 'search',
      },
      // Profile
      {
        children: [
          // Profile index
          {
            element: 'Profile',
            index: true,
          },
          // Cart
          {
            element: 'Cart',
            path: 'cart',
          },
          // Favorites
          {
            element: 'Favorites',
            path: 'favorites',
          },
          // Orders
          {
            children: [
              // Orders index
              {
                element: 'Orders',
                index: true,
              },
              {
                element: 'OrderId',
                path: ':orderId',
              },
            ],
            element: <Outlet />,
            path: 'orders',
          },
          // Addresses
          {
            element: 'Addresses',
            path: 'addresses',
          },
          // Personal
          {
            element: 'Personal',
            path: 'personal',
          },
        ],
        element: <Outlet />,
        path: 'profile',
      },
      // Checkout
      {
        children: [
          {
            element: 'Address',
            path: 'address',
          },
          {
            element: 'Payment',
            path: 'payment',
          },
          {
            element: 'Check',
            path: 'check',
          },
        ],
        element: <Outlet />,
        path: 'checkout',
      },
    ],
    element: (
      <div>
        <h1>App</h1>
        <div>
          <Outlet />
        </div>
      </div>
    ),
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
