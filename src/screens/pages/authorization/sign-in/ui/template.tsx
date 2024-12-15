type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign In' template {isFallback ? 'fallback' : 'component'}</>
)
