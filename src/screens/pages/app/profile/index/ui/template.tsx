type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile index' template {isFallback ? 'fallback' : 'component'}</>
)
