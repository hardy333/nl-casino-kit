import type { ComponentConfig } from '@puckeditor/core'
import { TournamentWidget } from './TournamentWidget'
import type { TournamentWidgetProps } from './types'

export const tournamentWidgetConfig: ComponentConfig<TournamentWidgetProps> = {
  label: 'Tournament Widget',
  fields: {
    title: { type: 'text', label: 'Title' },
    prizePool: { type: 'number', label: 'Prize pool' },
    participants: { type: 'number', label: 'Participants' },
    durationHours: { type: 'number', label: 'Ends in (hours)', min: 1, max: 720 },
    leaderboard: {
      type: 'array',
      label: 'Leaderboard',
      max: 10,
      getItemSummary: (item) => item.player || 'Player',
      defaultItemProps: { player: 'player', points: 0 },
      arrayFields: {
        player: { type: 'text', label: 'Player' },
        points: { type: 'number', label: 'Points' },
      },
    },
  },
  defaultProps: {
    title: 'Weekly Drop Race',
    prizePool: 250000,
    participants: 18420,
    durationHours: 48,
    leaderboard: [
      { player: 'luckystar_88', points: 184200 },
      { player: 'reelqueen', points: 172900 },
      { player: 'nightowl', points: 151400 },
    ],
  },
  render: TournamentWidget,
}
