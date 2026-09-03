import type { Cta } from '@/types'
import type { GameCategory } from '@/data/games'

export type GameCarouselProps = {
  title: string
  subtitle: string
  category: GameCategory
  maxGames: number
  slidesToShow: number
  hotOnly: boolean
  showBadges: boolean
  showJackpots: boolean
  loop: boolean
  autoplay: boolean
  intervalMs: number
  viewAll: Cta
}
