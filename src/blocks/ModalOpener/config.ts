import type { ComponentConfig } from '@puckeditor/core'
import { alignField, buttonSizeField, cta, ctaField } from '@/blocks/fields'
import { ModalOpener } from './ModalOpener'
import type { ModalOpenerProps } from './types'

export const modalOpenerConfig: ComponentConfig<ModalOpenerProps> = {
  label: 'Modal Opener',
  fields: {
    trigger: ctaField('Button'),
    triggerSize: buttonSizeField('Button size'),
    align: alignField('Button alignment'),
    title: { type: 'text', label: 'Modal title' },
    description: { type: 'textarea', label: 'Modal description' },
    content: { type: 'slot', label: 'Modal content' },
  },
  defaultProps: {
    trigger: cta('View details', '', 'neon'),
    triggerSize: 'md',
    align: 'left',
    title: 'More details',
    description: 'Add any content below — text, cards, buttons, anything allowed on this page.',
    content: [],
  },
  render: ModalOpener,
}
