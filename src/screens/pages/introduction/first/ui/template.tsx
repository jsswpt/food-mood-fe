type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>
    'Introduction first step' template {isFallback ? 'fallback' : 'component'}
  </>
)
