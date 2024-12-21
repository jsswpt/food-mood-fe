type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign up avatar' template {isFallback ? 'fallback' : 'component'}</>
)
