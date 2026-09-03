import type { ComponentConfig } from '@puckeditor/core'
import { nextLevelGameOptions } from '@/data/nextLevelGames'
import { BlockShell } from '@/ui/BlockShell'
import { GameCard } from './GameCard'
import type { GameCardProps } from './types'

export const gameCardConfig: ComponentConfig<GameCardProps> = {
  label: 'Game Card',
  fields: {
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
  defaultProps: {
    gameId: 'ufo',
    token: '',
    openMode: 'modal',
  },
  render: (props) => (
    <BlockShell>
      <div className="max-w-56">
        <GameCard {...props} />
      </div>
    </BlockShell>
  ),
}
