import type { Align } from '@/types'

export type TextTone = 'body' | 'muted'

export type TextProps = {
  body: string
  align: Align
  tone: TextTone
}
