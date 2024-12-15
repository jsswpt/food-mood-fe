type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>
    'Introduction fourth step' template {isFallback ? 'fallback' : 'component'}
  </>
)
