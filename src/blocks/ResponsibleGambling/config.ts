import type { ComponentConfig } from '@puckeditor/core'
import { booleanField } from '@/blocks/fields'
import { ResponsibleGambling } from './ResponsibleGambling'
import type { ResponsibleGamblingProps } from './types'

export const responsibleGamblingConfig: ComponentConfig<ResponsibleGamblingProps> = {
  label: 'Responsible Gambling',
  fields: {
    message: { type: 'textarea', label: 'Message' },
    helplineLabel: { type: 'text', label: 'Helpline label' },
    helplineHref: { type: 'text', label: 'Helpline link' },
    minAge: { type: 'number', label: 'Minimum age', min: 18, max: 25 },
    showAgeBadge: booleanField('Age badge'),
    variant: {
      type: 'radio',
      label: 'Variant',
      options: [
        { label: 'Subtle', value: 'subtle' },
        { label: 'Strong', value: 'strong' },
      ],
    },
  },
  defaultProps: {
    message:
      'Gambling can be addictive. Set deposit limits, take breaks, and never play with money you cannot afford to lose.',
    helplineLabel: 'Get help',
    helplineHref: '#',
    minAge: 18,
    showAgeBadge: true,
    variant: 'subtle',
  },
  render: ResponsibleGambling,
}
