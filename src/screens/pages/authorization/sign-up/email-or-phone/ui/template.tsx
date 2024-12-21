type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign up email or phone' template {isFallback ? 'fallback' : 'component'}</>
)
