type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign up otp' template {isFallback ? 'fallback' : 'component'}</>
)
