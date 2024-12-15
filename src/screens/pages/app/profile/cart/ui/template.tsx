type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile cart' template {isFallback ? 'fallback' : 'component'}</>
)
