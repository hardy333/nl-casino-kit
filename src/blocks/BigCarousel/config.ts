import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, columnsField, cta, ctaField } from '@/blocks/fields'
import { GAME_CATEGORIES } from '@/data/games'
import { BigCarousel } from './BigCarousel'
import type { BigCarouselProps } from './types'

export const bigCarouselConfig: ComponentConfig<BigCarouselProps> = {
  label: 'Big Carousel',
  fields: {
    title: { type: 'text', label: 'Title' },
    icon: { type: 'text', label: 'Icon (emoji)' },
    source: {
      type: 'radio',
      label: 'Content',
      options: [
        { label: 'Catalogue', value: 'catalogue' },
        { label: 'Custom blocks', value: 'slot' },
      ],
    },
    category: { type: 'select', label: 'Category', options: GAME_CATEGORIES },
    maxGames: { type: 'number', label: 'Max games', min: 1, max: 24 },
    slidesToShow: columnsField('Tiles per view', 6),
    showBadges: booleanField('Badges'),
    showJackpots: booleanField('Jackpots'),
    loop: booleanField('Loop', 'On', 'Off'),
    autoplay: booleanField('Autoplay', 'On', 'Off'),
    intervalMs: { type: 'number', label: 'Interval (ms)', min: 1500, step: 500 },
    showAll: ctaField('Show all'),
    items: { type: 'slot', label: 'Slides' },
  },
  defaultProps: {
    title: 'Recommended Slots',
    icon: '🔥',
    source: 'catalogue',
    category: 'slots',
    maxGames: 12,
    slidesToShow: 6,
    showBadges: true,
    showJackpots: false,
    loop: false,
    autoplay: false,
    intervalMs: 4000,
    showAll: cta('Show All', '', 'outline'),
    items: [],
  },
  render: BigCarousel,
}
