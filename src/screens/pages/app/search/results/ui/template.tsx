type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Search results' template {isFallback ? 'fallback' : 'component'}</>
)
