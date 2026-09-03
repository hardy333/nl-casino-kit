import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, buttonVariantField, cta, gradient, gradientField } from '@/blocks/fields'
import { PromoCarousel } from './PromoCarousel'
import type { PromoCarouselProps } from './types'

export const promoCarouselConfig: ComponentConfig<PromoCarouselProps> = {
  label: 'Promo Carousel',
  fields: {
    title: { type: 'text', label: 'Section title' },
    slides: {
      type: 'array',
      label: 'Slides',
      getItemSummary: (item) => item.title || 'Slide',
      arrayFields: {
        title: { type: 'text', label: 'Title' },
        subtitle: { type: 'textarea', label: 'Subtitle' },
        badge: { type: 'text', label: 'Badge' },
        glyph: { type: 'text', label: 'Watermark emoji' },
        background: gradientField('Background'),
        action: {
          type: 'object',
          label: 'Button',
          objectFields: {
            label: { type: 'text', label: 'Label' },
            href: { type: 'text', label: 'Link' },
            variant: buttonVariantField(),
          },
        },
      },
    },
    autoplay: booleanField('Autoplay', 'On', 'Off'),
    intervalMs: { type: 'number', label: 'Interval (ms)', min: 1500, step: 500 },
  },
  defaultProps: {
    title: 'This week',
    autoplay: true,
    intervalMs: 5000,
    slides: [
      {
        title: 'Weekend reload',
        subtitle: '50% back on every Saturday deposit, up to €200.',
        badge: 'Weekly',
        glyph: '🎁',
        background: gradient('#16a34a', '#0f766e'),
        action: cta('Opt in', '', 'gold'),
      },
      {
        title: 'Cash drops every hour',
        subtitle: 'Random prizes across 40 selected slots.',
        badge: 'Live now',
        glyph: '💰',
        background: gradient('#f5b23a', '#b45309'),
        action: cta('See games', '', 'neon'),
      },
      {
        title: 'Tournament season',
        subtitle: '€50,000 prize pool across four weeks.',
        badge: 'Compete',
        glyph: '🏆',
        background: gradient('#7c3aed', '#312e81'),
        action: cta('Join', '', 'neon'),
      },
    ],
  },
  render: PromoCarousel,
}
