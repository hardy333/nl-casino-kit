import type { ComponentConfig } from '@puckeditor/core'
import { Divider } from './Divider'
import type { DividerProps } from './types'

export const dividerConfig: ComponentConfig<DividerProps> = {
  label: 'Divider',
  fields: {
    style: {
      type: 'radio',
      label: 'Style',
      options: [
        { label: 'Line', value: 'line' },
        { label: 'Glow', value: 'glow' },
        { label: 'Space', value: 'space' },
      ],
    },
    spacing: {
      type: 'radio',
      label: 'Spacing',
      options: [
        { label: 'S', value: 'sm' },
        { label: 'M', value: 'md' },
        { label: 'L', value: 'lg' },
      ],
    },
  },
  defaultProps: {
    style: 'line',
    spacing: 'md',
  },
  render: Divider,
}
