import type { NextLevelGameId } from '@/data/nextLevelGames'

export type GameOpenMode = 'modal' | 'redirect'

export type GameCardProps = {
  gameId: NextLevelGameId
  token: string
  openMode?: GameOpenMode
}
