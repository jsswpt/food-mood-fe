type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Products product' template {isFallback ? 'fallback' : 'component'}</>
)
