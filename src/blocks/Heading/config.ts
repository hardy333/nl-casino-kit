import type { ComponentConfig } from '@puckeditor/core'
import { alignField } from '@/blocks/fields'
import { Heading } from './Heading'
import type { HeadingProps } from './types'

export const headingConfig: ComponentConfig<HeadingProps> = {
  label: 'Heading',
  fields: {
    text: { type: 'text', label: 'Text' },
    level: {
      type: 'select',
      label: 'Level',
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
      ],
    },
    align: alignField(),
  },
  defaultProps: {
    text: 'Section heading',
    level: 'h2',
    align: 'left',
  },
  render: Heading,
}
