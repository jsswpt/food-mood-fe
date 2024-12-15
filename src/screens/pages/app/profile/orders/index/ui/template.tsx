type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile orders index' template {isFallback ? 'fallback' : 'component'}</>
)
