type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'Checkout payment' template {isFallback ? 'fallback' : 'component'}</>
)
