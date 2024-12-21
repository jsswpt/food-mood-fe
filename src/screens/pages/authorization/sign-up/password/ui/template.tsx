type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign up password' template {isFallback ? 'fallback' : 'component'}</>
)
