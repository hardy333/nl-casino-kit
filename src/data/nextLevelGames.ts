export type NextLevelGameId = 'ufo' | 'plinko' | 'chicken' | 'aviator' | 'lobby'

export type NextLevelGame = {
  id: NextLevelGameId
  name: string
  /** Origin the game is served from; the launch path (/auth?token=...) is appended at render time. */
  baseUrl: string
}

/**
 * Next Level Games catalogue for the Game Card block. Every game shares the
 * same token — only the origin differs — so the card builds
 * `${baseUrl}/auth?token=...` at launch time.
 */
export const NEXT_LEVEL_GAMES: NextLevelGame[] = [
  { id: 'ufo', name: 'UFO', baseUrl: 'https://ufo.dev-portal.next-level.games' },
  { id: 'plinko', name: 'Plinko', baseUrl: 'https://plinko.dev-portal.next-level.games' },
  { id: 'chicken', name: 'Chicken', baseUrl: 'https://chicken.dev-portal.next-level.games' },
  { id: 'aviator', name: 'Aviator', baseUrl: 'https://aviator.dev-portal.next-level.games' },
  { id: 'lobby', name: 'Lobby', baseUrl: 'https://lobby.dev-portal.next-level.games' },
]

export const findNextLevelGame = (id: string) =>
  NEXT_LEVEL_GAMES.find((game) => game.id === id)

export const nextLevelGameOptions = NEXT_LEVEL_GAMES.map((game) => ({
  label: game.name,
  value: game.id,
}))
