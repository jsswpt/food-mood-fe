type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Sign up names' template {isFallback ? 'fallback' : 'component'}</>
)
