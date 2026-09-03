import type { ComponentConfig } from '@puckeditor/core'
import { Tabs } from './Tabs'
import type { TabsProps } from './types'

export const tabsConfig: ComponentConfig<TabsProps> = {
  label: 'Tabs',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    variant: {
      type: 'radio',
      label: 'Variant',
      options: [
        { label: 'Pill', value: 'pill' },
        { label: 'Underline', value: 'underline' },
      ],
    },
    tabs: {
      type: 'array',
      label: 'Tabs',
      getItemSummary: (item) => item.label || 'Tab',
      defaultItemProps: { label: 'New tab', icon: '', content: [] },
      arrayFields: {
        label: { type: 'text', label: 'Label' },
        icon: { type: 'text', label: 'Icon (emoji)' },
        content: { type: 'slot', label: 'Content' },
      },
    },
  },
  defaultProps: {
    title: 'Browse the lobby',
    subtitle: 'Each tab holds its own nested layout',
    variant: 'pill',
    tabs: [
      { label: 'Slots', icon: '🎰', content: [] },
      { label: 'Live', icon: '🎥', content: [] },
      { label: 'Jackpots', icon: '💰', content: [] },
    ],
  },
  render: Tabs,
}
