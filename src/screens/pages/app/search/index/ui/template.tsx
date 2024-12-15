type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Search index' template {isFallback ? 'fallback' : 'component'}</>
)
