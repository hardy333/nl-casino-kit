import type { Align, ButtonVariant } from '@/types'

export type MenuEntry = {
  label: string
  href: string
  icon: string
  separatorAfter: boolean
}

export type DropdownMenuProps = {
  trigger: string
  variant: ButtonVariant
  align: Align
  entries: MenuEntry[]
}
