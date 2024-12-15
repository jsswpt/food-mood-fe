type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Categories index' template {isFallback ? 'fallback' : 'component'}</>
)
