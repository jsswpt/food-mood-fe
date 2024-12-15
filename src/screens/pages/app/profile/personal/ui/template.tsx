type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Profile personal' template {isFallback ? 'fallback' : 'component'}</>
)
