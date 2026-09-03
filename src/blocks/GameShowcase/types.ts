export type ShowcaseGame = {
  name: string
  tagline: string
  category: string
  badge: string
  emoji: string
  gradientFrom: string
  gradientTo: string
  href: string
}

export type GameShowcaseProps = {
  title: string
  subtitle: string
  allLabel: string
  columns: number
  showCounts: boolean
  games: ShowcaseGame[]
}
