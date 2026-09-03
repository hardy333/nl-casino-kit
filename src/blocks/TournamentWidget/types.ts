export type LeaderboardRow = {
  player: string
  points: number
}

export type TournamentWidgetProps = {
  title: string
  prizePool: number
  participants: number
  durationHours: number
  leaderboard: LeaderboardRow[]
}
