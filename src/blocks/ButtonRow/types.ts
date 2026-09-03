import type { Align, ButtonSize, Cta } from '@/types'

export type ButtonRowProps = {
  buttons: Cta[]
  align: Align
  size: ButtonSize
  stackOnMobile: boolean
}
