import type { Align, Cta, Gradient } from '@/types'

export type HeroHeight = 'sm' | 'md' | 'lg'

export type HeroBannerProps = {
  eyebrow: string
  title: string
  subtitle: string
  watermark: string
  align: Align
  height: HeroHeight
  gradient: Gradient
  ctas: Cta[]
}
