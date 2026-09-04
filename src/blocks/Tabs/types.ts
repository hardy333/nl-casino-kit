import type { Slot } from '@puckeditor/core'

export type TabVariant = 'pill' | 'underline'

export const MAX_TABS = 6

export type TabItem = {
  label: string
  icon: string
  isEnabled: boolean
}

export type TabsProps = {
  title: string
  subtitle: string
  variant: TabVariant
  tabs: TabItem[]
  content1: Slot
  content2: Slot
  content3: Slot
  content4: Slot
  content5: Slot
  content6: Slot
}

// Order matters: index N maps to tabs[N] in the render function.
export const CONTENT_SLOT_KEYS = [
  'content1',
  'content2',
  'content3',
  'content4',
  'content5',
  'content6',
] as const satisfies readonly (keyof TabsProps)[]
