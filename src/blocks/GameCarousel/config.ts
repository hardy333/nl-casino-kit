import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, columnsField, cta, ctaField } from '@/blocks/fields'
import { GAME_CATEGORIES } from '@/data/games'
import { GameCarousel } from './GameCarousel'
import type { GameCarouselProps } from './types'

export const gameCarouselConfig: ComponentConfig<GameCarouselProps> = {
  label: 'Game Carousel',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    category: { type: 'select', label: 'Category', options: GAME_CATEGORIES },
    maxGames: { type: 'number', label: 'Max games', min: 1, max: 24 },
    slidesToShow: columnsField('Tiles per view', 6),
    hotOnly: booleanField('Hot games only', 'Yes', 'No'),
    showBadges: booleanField('Badges'),
    showJackpots: booleanField('Jackpots'),
    loop: booleanField('Loop', 'On', 'Off'),
    autoplay: booleanField('Autoplay', 'On', 'Off'),
    intervalMs: { type: 'number', label: 'Interval (ms)', min: 1500, step: 500 },
    viewAll: ctaField('View all'),
  },
  defaultProps: {
    title: 'Trending now',
    subtitle: 'Swipe or drag to browse',
    category: 'slots',
    maxGames: 16,
    slidesToShow: 4,
    hotOnly: false,
    showBadges: true,
    showJackpots: true,
    loop: true,
    autoplay: false,
    intervalMs: 4000,
    viewAll: cta('View all', '', 'ghost'),
  },
  render: GameCarousel,
}
