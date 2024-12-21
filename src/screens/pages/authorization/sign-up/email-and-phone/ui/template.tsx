type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>
    'Sign up Email and phone' template {isFallback ? 'fallback' : 'component'}
  </>
)
