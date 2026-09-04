import type { ComponentConfig } from '@puckeditor/core'
import { Tabs } from './Tabs'
import { MAX_TABS, type TabsProps } from './types'

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
      max: MAX_TABS,
      getItemSummary: (item) => item.label || 'Tab',
      defaultItemProps: { label: 'New tab', icon: '', isEnabled: true },
      arrayFields: {
        label: { type: 'text', label: 'Label' },
        icon: { type: 'text', label: 'Icon (emoji)' },
        isEnabled: {
          type: 'radio',
          label: 'Enabled',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
      },
    },
    content1: { type: 'slot', label: 'Tab 1 content' },
    content2: { type: 'slot', label: 'Tab 2 content' },
    content3: { type: 'slot', label: 'Tab 3 content' },
    content4: { type: 'slot', label: 'Tab 4 content' },
    content5: { type: 'slot', label: 'Tab 5 content' },
    content6: { type: 'slot', label: 'Tab 6 content' },
  },
  defaultProps: {
    title: 'Browse the lobby',
    subtitle: 'Each tab holds its own nested layout',
    variant: 'pill',
    tabs: [
      { label: 'Slots', icon: '🎰', isEnabled: true },
      { label: 'Live', icon: '🎥', isEnabled: true },
      { label: 'Jackpots', icon: '💰', isEnabled: true },
    ],
    content1: [],
    content2: [],
    content3: [],
    content4: [],
    content5: [],
    content6: [],
  },
  render: Tabs,
}
