type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign Up' template {isFallback ? 'fallback' : 'component'}</>
)
