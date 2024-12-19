import { Form as FormikForm, Formik, FormikProps, FormikValues } from 'formik'
import React from 'react'

import { FormBlock, FormCol, FormRow, FormWrapper } from '../../atoms'

type ColProps = { id: string; children: React.ReactNode }

type RowProps = {
  id: string
  cols: Array<ColProps>
}

type BlockProps = {
  id: string
  rows: Array<RowProps>
}

export type FormProps = {
  items: Array<BlockProps>
  formProps?: {
    handleSubmit: () => void
  } & FormikProps<FormikValues>
}

export const Form = ({ formProps, items }: FormProps) => {
  const Child = (
    <FormWrapper>
      {items.map(({ id: blockId, rows }) => (
        <FormBlock key={blockId}>
          {rows.map(({ cols, id: rowId }) => (
            <FormRow key={[blockId, rowId].join('-')}>
              {cols.map(({ children, id: colId }) => (
                <FormCol key={[blockId, rowId, colId].join('-')}>
                  {children}
                </FormCol>
              ))}
            </FormRow>
          ))}
        </FormBlock>
      ))}
    </FormWrapper>
  )

  if (!formProps) {
    return Child
  }

  return (
    <Formik {...formProps} onSubmit={formProps.handleSubmit}>
      <FormikForm>{Child}</FormikForm>
    </Formik>
  )
}
