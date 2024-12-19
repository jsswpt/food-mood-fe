import { useFormik } from 'formik'

import { SignInForm } from '@/entities/session'

export const Component = () => {
  const formProps = useFormik({ initialValues: {}, onSubmit: () => {} })

  return <SignInForm formProps={formProps} />
}
