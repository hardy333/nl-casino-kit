import type { Gradient } from '@/types'

export type GameCategory = 'slots' | 'live' | 'table' | 'crash'

export type Game = {
  id: string
  name: string
  provider: string
  category: GameCategory
  emoji: string
  gradient: Gradient
  isHot: boolean
  jackpot?: string
}

export const GAME_CATEGORIES: { label: string; value: GameCategory }[] = [
  { label: 'Slots', value: 'slots' },
  { label: 'Live Casino', value: 'live' },
  { label: 'Table Games', value: 'table' },
  { label: 'Crash', value: 'crash' },
]

export const GAMES: Game[] = [
  { id: 'sunset-reels', name: 'Sunset Reels', provider: 'Nolimit', category: 'slots', emoji: '🌅', gradient: { from: '#f97316', to: '#be123c' }, isHot: true, jackpot: '€12,480' },
  { id: 'gold-rush', name: 'Gold Rush', provider: 'Pragmatic', category: 'slots', emoji: '⛏️', gradient: { from: '#f5b23a', to: '#a16207' }, isHot: true, jackpot: '€48,120' },
  { id: 'neon-nights', name: 'Neon Nights', provider: 'Push Gaming', category: 'slots', emoji: '🌃', gradient: { from: '#22d3ee', to: '#4338ca' }, isHot: false },
  { id: 'fruit-storm', name: 'Fruit Storm', provider: 'Play n GO', category: 'slots', emoji: '🍒', gradient: { from: '#ec4899', to: '#7c3aed' }, isHot: false },
  { id: 'pharaoh-path', name: "Pharaoh's Path", provider: 'Netent', category: 'slots', emoji: '🏺', gradient: { from: '#eab308', to: '#78350f' }, isHot: false, jackpot: '€8,900' },
  { id: 'deep-dive', name: 'Deep Dive', provider: 'Relax', category: 'slots', emoji: '🐙', gradient: { from: '#0ea5e9', to: '#1e3a8a' }, isHot: false },

  { id: 'live-roulette', name: 'Lightning Roulette', provider: 'Evolution', category: 'live', emoji: '🎡', gradient: { from: '#dc2626', to: '#450a0a' }, isHot: true },
  { id: 'live-blackjack', name: 'Infinite Blackjack', provider: 'Evolution', category: 'live', emoji: '🃏', gradient: { from: '#16a34a', to: '#052e16' }, isHot: false },
  { id: 'crazy-time', name: 'Crazy Time', provider: 'Evolution', category: 'live', emoji: '🎪', gradient: { from: '#a855f7', to: '#3b0764' }, isHot: true },
  { id: 'live-baccarat', name: 'Speed Baccarat', provider: 'Pragmatic', category: 'live', emoji: '👑', gradient: { from: '#f5b23a', to: '#713f12' }, isHot: false },

  { id: 'euro-roulette', name: 'European Roulette', provider: 'Netent', category: 'table', emoji: '🎯', gradient: { from: '#059669', to: '#064e3b' }, isHot: false },
  { id: 'poker-hold', name: "Hold'em Poker", provider: 'Playtech', category: 'table', emoji: '♠️', gradient: { from: '#475569', to: '#0f172a' }, isHot: false },

  { id: 'aviator', name: 'Aviator', provider: 'Spribe', category: 'crash', emoji: '✈️', gradient: { from: '#ef4444', to: '#7f1d1d' }, isHot: true },
  { id: 'plinko', name: 'Plinko', provider: 'BGaming', category: 'crash', emoji: '🔻', gradient: { from: '#22d3ee', to: '#155e75' }, isHot: false },
  { id: 'mines', name: 'Mines', provider: 'BGaming', category: 'crash', emoji: '💣', gradient: { from: '#64748b', to: '#1e293b' }, isHot: false },
  { id: 'wild-west-gold', name: 'Wild West Gold', provider: 'Pragmatic', category: 'slots', emoji: '🤠', gradient: { from: '#d97706', to: '#7c2d12' }, isHot: true, jackpot: '€31,540' },
  { id: 'book-of-suns', name: 'Book of Suns', provider: 'Play n GO', category: 'slots', emoji: '📖', gradient: { from: '#f59e0b', to: '#92400e' }, isHot: false },
  { id: 'frozen-peaks', name: 'Frozen Peaks', provider: 'Netent', category: 'slots', emoji: '🏔️', gradient: { from: '#38bdf8', to: '#1e40af' }, isHot: false, jackpot: '€6,210' },
  { id: 'candy-blitz', name: 'Candy Blitz', provider: 'Pragmatic', category: 'slots', emoji: '🍬', gradient: { from: '#f472b6', to: '#9d174d' }, isHot: true },
  { id: 'dragon-hoard', name: 'Dragon Hoard', provider: 'Push Gaming', category: 'slots', emoji: '🐉', gradient: { from: '#dc2626', to: '#450a0a' }, isHot: false, jackpot: '€92,400' },
  { id: 'lucky-koi', name: 'Lucky Koi', provider: 'Relax', category: 'slots', emoji: '🐟', gradient: { from: '#fb923c', to: '#c2410c' }, isHot: false },
  { id: 'temple-quest', name: 'Temple Quest', provider: 'Nolimit', category: 'slots', emoji: '🗿', gradient: { from: '#84cc16', to: '#14532d' }, isHot: false },
  { id: 'starlight-spin', name: 'Starlight Spin', provider: 'Netent', category: 'slots', emoji: '✨', gradient: { from: '#a78bfa', to: '#4c1d95' }, isHot: true, jackpot: '€18,760' },
  { id: 'pirate-bounty', name: 'Pirate Bounty', provider: 'Play n GO', category: 'slots', emoji: '🏴‍☠️', gradient: { from: '#0d9488', to: '#134e4a' }, isHot: false },
  { id: 'diamond-rain', name: 'Diamond Rain', provider: 'Pragmatic', category: 'slots', emoji: '💎', gradient: { from: '#22d3ee', to: '#0e7490' }, isHot: false, jackpot: '€24,900' },

  { id: 'live-mega-wheel', name: 'Mega Wheel', provider: 'Pragmatic', category: 'live', emoji: '🎡', gradient: { from: '#e11d48', to: '#4c0519' }, isHot: true },
  { id: 'live-dream-catcher', name: 'Dream Catcher', provider: 'Evolution', category: 'live', emoji: '🌈', gradient: { from: '#8b5cf6', to: '#2e1065' }, isHot: false },
  { id: 'live-monopoly', name: 'Monopoly Live', provider: 'Evolution', category: 'live', emoji: '🎩', gradient: { from: '#059669', to: '#022c22' }, isHot: true },
  { id: 'live-sweet-bonanza', name: 'Sweet Bonanza Candyland', provider: 'Pragmatic', category: 'live', emoji: '🍭', gradient: { from: '#f472b6', to: '#831843' }, isHot: false },

  { id: 'table-craps', name: 'First Person Craps', provider: 'Evolution', category: 'table', emoji: '🎲', gradient: { from: '#0ea5e9', to: '#0c4a6e' }, isHot: false },
  { id: 'table-baccarat', name: 'Classic Baccarat', provider: 'Playtech', category: 'table', emoji: '🀄', gradient: { from: '#b91c1c', to: '#450a0a' }, isHot: false },
  { id: 'table-sic-bo', name: 'Super Sic Bo', provider: 'Evolution', category: 'table', emoji: '🎯', gradient: { from: '#7c3aed', to: '#2e1065' }, isHot: false },

  { id: 'dice', name: 'Dice', provider: 'BGaming', category: 'crash', emoji: '🎲', gradient: { from: '#14b8a6', to: '#134e4a' }, isHot: false },
  { id: 'limbo', name: 'Limbo', provider: 'Spribe', category: 'crash', emoji: '📉', gradient: { from: '#f43f5e', to: '#881337' }, isHot: true },
  { id: 'goal', name: 'Goal', provider: 'Spribe', category: 'crash', emoji: '⚽', gradient: { from: '#65a30d', to: '#1a2e05' }, isHot: false },
]

type GameQuery = {
  category?: GameCategory
  limit?: number
  hotOnly?: boolean
}

export function getGames({ category, limit = 8, hotOnly = false }: GameQuery = {}) {
  return GAMES.filter(
    (game) =>
      (!category || game.category === category) && (!hotOnly || game.isHot),
  ).slice(0, limit)
}

export function getGameById(id: string) {
  return GAMES.find((game) => game.id === id)
}
