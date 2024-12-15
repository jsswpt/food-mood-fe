type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Forgot password otp' template {isFallback ? 'fallback' : 'component'}</>
)
