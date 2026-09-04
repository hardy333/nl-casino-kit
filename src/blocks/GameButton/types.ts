import type { NextLevelGameId } from '@/data/nextLevelGames'
import type { GameOpenMode } from '../GameCard/types'

export type GameButtonProps = {
  gameId: NextLevelGameId
  label: string
  openMode: GameOpenMode
}
