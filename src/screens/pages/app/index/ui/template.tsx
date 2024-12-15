type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'App index' template {isFallback ? 'fallback' : 'component'}</>
)
