import type { Slot } from '@puckeditor/core'
import type { Cta } from '@/types'
import type { GameCategory } from '@/data/games'

export type BigCarouselSource = 'catalogue' | 'slot'

export type BigCarouselProps = {
  title: string
  icon: string
  source: BigCarouselSource
  category: GameCategory
  maxGames: number
  slidesToShow: number
  showBadges: boolean
  showJackpots: boolean
  loop: boolean
  autoplay: boolean
  intervalMs: number
  showAll: Cta
  items: Slot
}
