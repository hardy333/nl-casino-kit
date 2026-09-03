import type { Align } from '@/types'

export type CounterAccent = 'brand' | 'gold' | 'neon' | 'body'

export type CounterItem = {
  label: string
  value: number
  prefix: string
  suffix: string
}

export type CounterProps = {
  items: CounterItem[]
  durationMs: number
  align: Align
  accent: CounterAccent
}
