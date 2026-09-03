import type { ComponentConfig } from '@puckeditor/core'
import { alignField } from '@/blocks/fields'
import { Text } from './Text'
import type { TextProps } from './types'

export const textConfig: ComponentConfig<TextProps> = {
  label: 'Text',
  fields: {
    body: { type: 'textarea', label: 'Body' },
    align: alignField(),
    tone: {
      type: 'radio',
      label: 'Tone',
      options: [
        { label: 'Body', value: 'body' },
        { label: 'Muted', value: 'muted' },
      ],
    },
  },
  defaultProps: {
    body: 'Write something here.\n\nA blank line starts a new paragraph.',
    align: 'left',
    tone: 'muted',
  },
  render: Text,
}
