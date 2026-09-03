import type { Slot } from '@puckeditor/core'
import type { Align, ButtonSize, Cta } from '@/types'

export type ModalOpenerProps = {
  trigger: Cta
  triggerSize: ButtonSize
  align: Align
  title: string
  description: string
  content: Slot
}
