import type { Cta, Gradient } from '@/types'

export type PromoSlide = {
  title: string
  subtitle: string
  badge: string
  glyph: string
  background: Gradient
  action: Cta
}

export type PromoCarouselProps = {
  title: string
  slides: PromoSlide[]
  autoplay: boolean
  intervalMs: number
}
