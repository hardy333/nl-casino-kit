import type { Cta } from '@/types'
import type { GameCategory } from '@/data/games'

export type GameTileSize = 'sm' | 'md' | 'lg'

export type GameGridProps = {
  title: string
  subtitle: string
  category: GameCategory
  columns: number
  maxGames: number
  tileSize: GameTileSize
  hotOnly: boolean
  showBadges: boolean
  showJackpots: boolean
  viewAll: Cta
}
