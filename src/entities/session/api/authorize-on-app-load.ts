import { createFakeRequest } from '@/shared/lib/fake-request'
import userJson from '@/shared/mock/user.json'

type UserResponse = {
  id: number
  firstName: string
  lastName: string
  patronymic: string | null
  email: string
  phone: string
}

export const authorizeOnAppOpenReq = () => {
  const email = localStorage.getItem('email') ?? ''
  const password = localStorage.getItem('password') ?? ''

  return createFakeRequest<UserResponse>((res, rej) => {
    if (userJson.email === email && userJson.password === password) {
      const { password: _, ...rest } = userJson

      res(rest)
    } else {
      rej(new Error())
    }
  })
}
