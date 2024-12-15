type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Products index' template {isFallback ? 'fallback' : 'component'}</>
)
