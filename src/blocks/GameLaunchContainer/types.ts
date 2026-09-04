import type { Slot } from '@puckeditor/core'
import type { NextLevelGameId } from '@/data/nextLevelGames'
import type { GameOpenMode } from '../GameCard/types'

export type GameLaunchContainerProps = {
  gameId: NextLevelGameId
  openMode: GameOpenMode
  content: Slot
}
