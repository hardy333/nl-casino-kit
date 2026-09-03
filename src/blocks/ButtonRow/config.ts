import type { ComponentConfig } from '@puckeditor/core'
import { alignField, booleanField, buttonSizeField, cta, ctaListField } from '@/blocks/fields'
import { ButtonRow } from './ButtonRow'
import type { ButtonRowProps } from './types'

export const buttonRowConfig: ComponentConfig<ButtonRowProps> = {
  label: 'Button Row',
  fields: {
    buttons: ctaListField('Buttons', 4),
    align: alignField(),
    size: buttonSizeField(),
    stackOnMobile: booleanField('On mobile', 'Stack', 'Inline'),
  },
  defaultProps: {
    buttons: [cta('Play now', '', 'neon'), cta('Learn more', '', 'outline')],
    align: 'center',
    size: 'md',
    stackOnMobile: true,
  },
  render: ButtonRow,
}
