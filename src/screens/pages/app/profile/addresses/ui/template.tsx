type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile addresses' template {isFallback ? 'fallback' : 'component'}</>
)
