import type { Slot } from '@puckeditor/core'

export type TabVariant = 'pill' | 'underline'

export type TabItem = {
  label: string
  icon: string
  content: Slot
}

export type TabsProps = {
  title: string
  subtitle: string
  variant: TabVariant
  tabs: TabItem[]
}
