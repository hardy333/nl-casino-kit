import type { GameCategory } from '@/data/games'

export type WinTileSource = 'catalogue' | 'manual'

export type WinTile = {
  label: string
  amount: string
  currency: string
  emoji: string
  gradientFrom: string
  gradientTo: string
}

export type SmallHorizontalCarouselProps = {
  title: string
  source: WinTileSource
  category: GameCategory | ''
  maxItems: number
  tileWidth: number
  showLiveDot: boolean
  autoplay: boolean
  intervalMs: number
  tiles: WinTile[]
}
