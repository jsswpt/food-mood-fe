type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile orders order' template {isFallback ? 'fallback' : 'component'}</>
)
