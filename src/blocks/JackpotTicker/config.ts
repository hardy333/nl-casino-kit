import type { ComponentConfig } from '@puckeditor/core'
import { JackpotTicker } from './JackpotTicker'
import type { JackpotTickerProps } from './types'

export const jackpotTickerConfig: ComponentConfig<JackpotTickerProps> = {
  label: 'Jackpot Ticker',
  fields: {
    label: { type: 'text', label: 'Label' },
    startAmount: { type: 'number', label: 'Starting amount' },
    currency: {
      type: 'select',
      label: 'Currency',
      options: [
        { label: 'EUR', value: 'EUR' },
        { label: 'USD', value: 'USD' },
        { label: 'GBP', value: 'GBP' },
        { label: 'GEL', value: 'GEL' },
      ],
    },
    tickAmount: { type: 'number', label: 'Max increment per tick' },
    tickMs: { type: 'number', label: 'Tick interval (ms)', min: 200, step: 100 },
    variant: {
      type: 'radio',
      label: 'Variant',
      options: [
        { label: 'Bar', value: 'bar' },
        { label: 'Card', value: 'card' },
      ],
    },
  },
  defaultProps: {
    label: 'Mega jackpot',
    startAmount: 1284900,
    currency: 'EUR',
    tickAmount: 12,
    tickMs: 800,
    variant: 'bar',
  },
  render: JackpotTicker,
}
