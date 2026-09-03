import type { Cta, Gradient } from '@/types'

export type CardTone = 'brand' | 'gold' | 'neutral' | 'danger'

export type CardItem = {
  title: string
  body: string
  badge: string
  badgeTone: CardTone
  emoji: string
  gradient: Gradient
  cta: Cta
}

export type CardGridProps = {
  title: string
  subtitle: string
  columns: number
  showArtwork: boolean
  cards: CardItem[]
}
