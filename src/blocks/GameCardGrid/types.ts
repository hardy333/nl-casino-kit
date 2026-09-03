import type { GameCardProps } from '@/blocks/GameCard'

export type GameCardGridProps = {
  title: string
  subtitle: string
  columns: number
  cards: GameCardProps[]
}
