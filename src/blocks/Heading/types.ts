import type { Align } from '@/types'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

export type HeadingProps = {
  text: string
  level: HeadingLevel
  align: Align
}
