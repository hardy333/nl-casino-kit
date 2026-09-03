import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, colorField } from '@/blocks/fields'
import { GAME_CATEGORIES } from '@/data/games'
import { SmallHorizontalCarousel } from './SmallHorizontalCarousel'
import type { SmallHorizontalCarouselProps } from './types'

export const smallHorizontalCarouselConfig: ComponentConfig<SmallHorizontalCarouselProps> = {
  label: 'Small Horizontal Carousel',
  fields: {
    title: { type: 'text', label: 'Title' },
    source: {
      type: 'radio',
      label: 'Source',
      options: [
        { label: 'Catalogue', value: 'catalogue' },
        { label: 'Manual', value: 'manual' },
      ],
    },
    category: { type: 'select', label: 'Category', options: GAME_CATEGORIES },
    maxItems: { type: 'number', label: 'Max items', min: 1, max: 30 },
    tileWidth: { type: 'number', label: 'Tile width (px)', min: 60, max: 220, step: 4 },
    showLiveDot: booleanField('Live dot'),
    autoplay: booleanField('Autoplay', 'On', 'Off'),
    intervalMs: { type: 'number', label: 'Interval (ms)', min: 1500, step: 500 },
    tiles: {
      type: 'array',
      label: 'Manual tiles',
      getItemSummary: (item) => item.label || 'Tile',
      defaultItemProps: {
        label: 'Big win',
        amount: '1.20K',
        currency: 'EUR',
        emoji: '🎰',
        gradientFrom: '#7c3aed',
        gradientTo: '#312e81',
      },
      arrayFields: {
        label: { type: 'text', label: 'Label' },
        amount: { type: 'text', label: 'Amount' },
        currency: { type: 'text', label: 'Currency' },
        emoji: { type: 'text', label: 'Emoji' },
        gradientFrom: colorField('Gradient from'),
        gradientTo: colorField('Gradient to'),
      },
    },
  },
  defaultProps: {
    title: 'Recent Big Wins',
    source: 'catalogue',
    category: 'slots',
    maxItems: 12,
    tileWidth: 116,
    showLiveDot: true,
    autoplay: false,
    intervalMs: 3000,
    tiles: [],
  },
  render: SmallHorizontalCarousel,
}
