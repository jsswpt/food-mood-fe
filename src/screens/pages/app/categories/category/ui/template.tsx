type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Categories category' template {isFallback ? 'fallback' : 'component'}</>
)
