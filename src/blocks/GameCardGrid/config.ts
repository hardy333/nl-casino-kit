import type { ComponentConfig } from '@puckeditor/core'
import { columnsField } from '@/blocks/fields'
import { findNextLevelGame, nextLevelGameOptions } from '@/data/nextLevelGames'
import { GameCardGrid } from './GameCardGrid'
import type { GameCardGridProps } from './types'

export const gameCardGridConfig: ComponentConfig<GameCardGridProps> = {
  label: 'Game Card Container',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    columns: columnsField('Columns', 6),
    cards: {
      type: 'array',
      label: 'Games',
      getItemSummary: (item) => findNextLevelGame(item.gameId)?.name ?? 'Game',
      defaultItemProps: { gameId: 'ufo', token: '', openMode: 'modal' },
      arrayFields: {
        gameId: { type: 'select', label: 'Game', options: nextLevelGameOptions },
        token: { type: 'text', label: 'Token' },
        openMode: {
          type: 'radio',
          label: 'Open mode',
          options: [
            { label: 'Modal', value: 'modal' },
            { label: 'Redirect', value: 'redirect' },
          ],
        },
      },
    },
  },
  defaultProps: {
    title: 'Next Level Games',
    subtitle: '',
    columns: 4,
    cards: [
      { gameId: 'ufo', token: '', openMode: 'modal' },
      { gameId: 'plinko', token: '', openMode: 'modal' },
      { gameId: 'chicken', token: '', openMode: 'modal' },
      { gameId: 'aviator', token: '', openMode: 'modal' },
    ],
  },
  render: GameCardGrid,
}
