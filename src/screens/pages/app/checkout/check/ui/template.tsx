type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Checkout check' template {isFallback ? 'fallback' : 'component'}</>
)
