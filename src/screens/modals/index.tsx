import { useLocation } from '@/shared/lib/router'

export const ModalRouter = () => {
  const { modalPath } = useLocation()

  return <>{modalPath}</>
}
