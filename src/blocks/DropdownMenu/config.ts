import type { ComponentConfig } from '@puckeditor/core'
import { alignField, buttonVariantField } from '@/blocks/fields'
import { DropdownMenu } from './DropdownMenu'
import type { DropdownMenuProps } from './types'

export const dropdownMenuConfig: ComponentConfig<DropdownMenuProps> = {
  label: 'Dropdown Menu',
  fields: {
    trigger: { type: 'text', label: 'Trigger label' },
    variant: buttonVariantField('Trigger style'),
    align: alignField(),
    entries: {
      type: 'array',
      label: 'Entries',
      getItemSummary: (item) => item.label || 'Entry',
      defaultItemProps: { label: 'New entry', href: '#', icon: '', separatorAfter: false },
      arrayFields: {
        label: { type: 'text', label: 'Label' },
        href: { type: 'text', label: 'Link' },
        icon: { type: 'text', label: 'Icon (emoji)' },
        separatorAfter: {
          type: 'radio',
          label: 'Divider below',
          options: [
            { label: 'No', value: false },
            { label: 'Yes', value: true },
          ],
        },
      },
    },
  },
  defaultProps: {
    trigger: 'All providers',
    variant: 'ghost',
    align: 'left',
    entries: [
      { label: 'Pragmatic', href: '#', icon: '🎲', separatorAfter: false },
      { label: 'Evolution', href: '#', icon: '🎥', separatorAfter: false },
      { label: 'NetEnt', href: '#', icon: '⭐', separatorAfter: true },
      { label: 'See all providers', href: '#', icon: '➡️', separatorAfter: false },
    ],
  },
  render: DropdownMenu,
}
