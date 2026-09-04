import type { ComponentConfig } from '@puckeditor/core'
import { nextLevelGameOptions } from '@/data/nextLevelGames'
import { BlockShell } from '@/ui/BlockShell'
import { GameButton } from './GameButton'
import type { GameButtonProps } from './types'

export const gameButtonConfig: ComponentConfig<GameButtonProps> = {
  label: 'Game Button',
  fields: {
    gameId: { type: 'select', label: 'Game', options: nextLevelGameOptions },
    label: { type: 'text', label: 'Button label' },
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
    label: 'Play now',
    openMode: 'modal',
  },
  render: (props) => (
    <BlockShell>
      <GameButton {...props} />
    </BlockShell>
  ),
}
