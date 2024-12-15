type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>
    'Introduction third step' template {isFallback ? 'fallback' : 'component'}
  </>
)
