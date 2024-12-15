type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Checkout address' template {isFallback ? 'fallback' : 'component'}</>
)
