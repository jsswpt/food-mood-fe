type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>
    'Introduction second step' template {isFallback ? 'fallback' : 'component'}
  </>
)
