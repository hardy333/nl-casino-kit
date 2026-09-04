import type { ComponentConfig } from '@puckeditor/core'
import { nextLevelGameOptions } from '@/data/nextLevelGames'
import { GameLaunchContainer } from './GameLaunchContainer'
import type { GameLaunchContainerProps } from './types'

export const gameLaunchContainerConfig: ComponentConfig<GameLaunchContainerProps> = {
  label: 'Game Launch Container',
  fields: {
    gameId: { type: 'select', label: 'Game', options: nextLevelGameOptions },
    openMode: {
      type: 'radio',
      label: 'Open mode',
      options: [
        { label: 'Modal', value: 'modal' },
        { label: 'Redirect', value: 'redirect' },
      ],
    },
    content: { type: 'slot', label: 'Content' },
  },
  defaultProps: {
    gameId: 'ufo',
    openMode: 'modal',
    content: [],
  },
  render: GameLaunchContainer,
}
