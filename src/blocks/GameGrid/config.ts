import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, columnsField, cta, ctaField } from '@/blocks/fields'
import { GAME_CATEGORIES } from '@/data/games'
import { GameGrid } from './GameGrid'
import type { GameGridProps } from './types'

export const gameGridConfig: ComponentConfig<GameGridProps> = {
  label: 'Game Grid',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    category: { type: 'select', label: 'Category', options: GAME_CATEGORIES },
    columns: columnsField('Columns', 6),
    maxGames: { type: 'number', label: 'Max games', min: 1, max: 24 },
    tileSize: {
      type: 'radio',
      label: 'Tile size',
      options: [
        { label: 'S', value: 'sm' },
        { label: 'M', value: 'md' },
        { label: 'L', value: 'lg' },
      ],
    },
    hotOnly: booleanField('Hot games only', 'Yes', 'No'),
    showBadges: booleanField('Badges'),
    showJackpots: booleanField('Jackpots'),
    viewAll: ctaField('View all'),
  },
  defaultProps: {
    title: 'Popular slots',
    subtitle: 'Hand-picked by our team',
    category: 'slots',
    columns: 4,
    maxGames: 8,
    tileSize: 'md',
    hotOnly: false,
    showBadges: true,
    showJackpots: true,
    viewAll: cta('View all', '', 'ghost'),
  },
  render: GameGrid,
}
