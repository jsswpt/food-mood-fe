import { Outlet, RouteObject, useRoutes } from 'react-router-dom'

import { ForgotPassword } from './authorization/forgot-password/index'
import { NewPassword } from './authorization/forgot-password/new-password'
import { ForgotPasswordOtp } from './authorization/forgot-password/otp'
import { SignIn } from './authorization/sign-in'
import { SignUp } from './authorization/sign-up/index'
import { SignUpOtp } from './authorization/sign-up/otp'
import { IntroductionFirstStep } from './introduction/first'
import { IntroductionFourthStep } from './introduction/fourth'
import { IntroductionSecondStep } from './introduction/second'
import { IntroductionThirdStep } from './introduction/third'

import { useLocation } from '@/shared/lib/router'

const routeConfig: RouteObject[] = [
  // Introduction
  {
    children: [
      {
        element: <IntroductionFirstStep />,
        path: '1',
      },
      {
        element: <IntroductionSecondStep />,
        path: '2',
      },
      {
        element: <IntroductionThirdStep />,
        path: '3',
      },
      {
        element: <IntroductionFourthStep />,
        path: '4',
      },
    ],
    element: <Outlet />,
    path: '/introduction',
  },
  // Authorization
  {
    children: [
      // Sign in
      {
        element: <SignIn />,
        index: true,
      },
      // Sign up
      {
        children: [
          // Sign up index
          {
            element: <SignUp />,
            index: true,
          },
          // Sign up OTP
          {
            element: <SignUpOtp />,
            path: 'otp',
          },
        ],
        element: <Outlet />,
        path: 'sign-up',
      },
      // Forgot password
      {
        children: [
          // Forgot password index
          { element: <ForgotPassword />, index: true },
          // Forgot password OTP
          { element: <ForgotPasswordOtp />, path: 'otp' },
          // New password
          {
            element: <NewPassword />,
            path: 'new-password',
          },
        ],
        element: <Outlet />,
        path: 'forgot-password',
      },
    ],
    element: <Outlet />,
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
