type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile favorites' template {isFallback ? 'fallback' : 'component'}</>
)
