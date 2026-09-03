import type { ComponentConfig } from '@puckeditor/core'
import { alignField } from '@/blocks/fields'
import { Counter } from './Counter'
import type { CounterProps } from './types'

export const counterConfig: ComponentConfig<CounterProps> = {
  label: 'Counter / Stats',
  fields: {
    items: {
      type: 'array',
      label: 'Counters',
      getItemSummary: (item) => item.label || 'Counter',
      defaultItemProps: { label: 'Players online', value: 12480, prefix: '', suffix: '' },
      arrayFields: {
        label: { type: 'text', label: 'Label' },
        value: { type: 'number', label: 'Target value' },
        prefix: { type: 'text', label: 'Prefix' },
        suffix: { type: 'text', label: 'Suffix' },
      },
    },
    durationMs: { type: 'number', label: 'Animation duration (ms)', min: 200, step: 100 },
    align: alignField(),
    accent: {
      type: 'select',
      label: 'Accent',
      options: [
        { label: 'Brand', value: 'brand' },
        { label: 'Gold', value: 'gold' },
        { label: 'Neon', value: 'neon' },
        { label: 'Body', value: 'body' },
      ],
    },
  },
  defaultProps: {
    items: [
      { label: 'Players online', value: 12480, prefix: '', suffix: '' },
      { label: 'Paid out today', value: 2400000, prefix: '€', suffix: '' },
      { label: 'Games available', value: 4200, prefix: '', suffix: '+' },
    ],
    durationMs: 1400,
    align: 'left',
    accent: 'brand',
  },
  render: Counter,
}
