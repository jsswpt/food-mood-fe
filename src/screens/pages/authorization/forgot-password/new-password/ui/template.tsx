type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'New password' template {isFallback ? 'fallback' : 'component'}</>
)