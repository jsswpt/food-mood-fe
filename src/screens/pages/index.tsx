import { Outlet, RouteObject, useRoutes } from 'react-router-dom'

import { CategoriesCategory } from './app/categories/category'
import { CategoriesIndex } from './app/categories/index'
import { CheckoutAddress } from './app/checkout/address'
import { CheckoutCheck } from './app/checkout/check'
import { CheckoutPayment } from './app/checkout/payment'
import { AppIndex } from './app/index'
import { ProductsIndex } from './app/products/index'
import { ProductsProduct } from './app/products/product'
import { ProfileAddresses } from './app/profile/addresses'
import { ProfileCart } from './app/profile/cart'
import { ProfileFavorites } from './app/profile/favorites'
import { ProfileIndex } from './app/profile/index'
import { ProfileOrdersIndex } from './app/profile/orders/index'
import { ProfileOrdersOrder } from './app/profile/orders/order'
import { ProfilePersonal } from './app/profile/personal'
import { SearchIndex } from './app/search/index'
import { SearchResults } from './app/search/results'
import { ForgotPassword } from './authorization/forgot-password/index'
import { NewPassword } from './authorization/forgot-password/new-password'
import { ForgotPasswordOtp } from './authorization/forgot-password/otp'
import { SignIn } from './authorization/sign-in'
import { SignUpAvatar } from './authorization/sign-up/avatar'
import { SignUpEmailOrPhone } from './authorization/sign-up/email-or-phone'
import { SignUpNames } from './authorization/sign-up/names'
import { SignUpOtp } from './authorization/sign-up/otp'
import { SignUpPassword } from './authorization/sign-up/password'
import { IntroductionFirstStep } from './introduction/first'
import { IntroductionFourthStep } from './introduction/fourth'
import { IntroductionSecondStep } from './introduction/second'
import { IntroductionThirdStep } from './introduction/third'
import { AuthLayout } from '@/layouts/auth-layout'

import { AuthGuard } from '@/entities/session'

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
    element: (
      <AuthGuard reverse>
        <Outlet />
      </AuthGuard>
    ),
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
          // Sign up / names
          {
            element: <SignUpNames />,
            index: true,
          },
          // Sign up / email or phone
          {
            element: <SignUpEmailOrPhone />,
            path: 'email-or-phone',
          },
          // Sign up / avatar
          {
            element: <SignUpAvatar />,
            path: 'avatar',
          },
          // Sign up / password
          {
            element: <SignUpPassword />,
            path: 'avatar',
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
    element: (
      <AuthGuard reverse>
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </AuthGuard>
    ),
    path: '/authorization',
  },
  // App
  {
    children: [
      // Home
      {
        element: <AppIndex />,
        index: true,
      },
      // Categories
      {
        children: [
          // Categories index
          {
            element: <CategoriesIndex />,
            index: true,
          },
          // Category
          {
            element: <CategoriesCategory />,
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
            element: <ProductsIndex />,
            index: true,
          },
          // Product
          {
            element: <ProductsProduct />,
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
            element: <SearchIndex />,
            index: true,
          },
          // Search results
          {
            element: <SearchResults />,
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
            element: <ProfileIndex />,
            index: true,
          },
          // Cart
          {
            element: <ProfileCart />,
            path: 'cart',
          },
          // Favorites
          {
            element: <ProfileFavorites />,
            path: 'favorites',
          },
          // Orders
          {
            children: [
              // Orders index
              {
                element: <ProfileOrdersIndex />,
                index: true,
              },
              {
                element: <ProfileOrdersOrder />,
                path: ':orderId',
              },
            ],
            element: <Outlet />,
            path: 'orders',
          },
          // Addresses
          {
            element: <ProfileAddresses />,
            path: 'addresses',
          },
          // Personal
          {
            element: <ProfilePersonal />,
            path: 'personal',
          },
        ],
        element: <Outlet />,
        path: 'profile',
      },
      // Checkout
      {
        children: [
          // Checkout address
          {
            element: <CheckoutAddress />,
            path: 'address',
          },
          // Checkout payment
          {
            element: <CheckoutPayment />,
            path: 'payment',
          },
          // Checkout check
          {
            element: <CheckoutCheck />,
            path: 'check',
          },
        ],
        element: <Outlet />,
        path: 'checkout',
      },
    ],
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
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
