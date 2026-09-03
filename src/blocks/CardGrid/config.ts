import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, buttonVariantField, columnsField, cta, gradient, gradientField } from '@/blocks/fields'
import { CardGrid } from './CardGrid'
import type { CardGridProps } from './types'

export const cardGridConfig: ComponentConfig<CardGridProps> = {
  label: 'Card Grid',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    columns: columnsField('Columns', 4),
    showArtwork: booleanField('Artwork'),
    cards: {
      type: 'array',
      label: 'Cards',
      arrayFields: {
        title: { type: 'text', label: 'Title' },
        body: { type: 'textarea', label: 'Body' },
        badge: { type: 'text', label: 'Badge' },
        badgeTone: {
          type: 'select',
          label: 'Badge tone',
          options: [
            { label: 'Brand', value: 'brand' },
            { label: 'Gold', value: 'gold' },
            { label: 'Neutral', value: 'neutral' },
            { label: 'Danger', value: 'danger' },
          ],
        },
        emoji: { type: 'text', label: 'Emoji' },
        gradient: gradientField(),
        cta: {
          type: 'object',
          label: 'Button',
          objectFields: {
            label: { type: 'text', label: 'Label' },
            href: { type: 'text', label: 'Link' },
            variant: buttonVariantField(),
          },
        },
      },
      getItemSummary: (item) => item.title || 'Card',
    },
  },
  defaultProps: {
    title: 'Promotions',
    subtitle: 'Live right now',
    columns: 3,
    showArtwork: true,
    cards: [
      {
        title: 'Weekend reload',
        body: 'Top up on Saturday and get 50% back up to €200.',
        badge: 'Weekly',
        badgeTone: 'brand',
        emoji: '🎁',
        gradient: gradient('#16a34a', '#0f766e'),
        cta: cta('Opt in', '', 'neon'),
      },
      {
        title: 'Cash drops',
        body: 'Random prizes every hour across selected slots.',
        badge: 'Hot',
        badgeTone: 'danger',
        emoji: '💰',
        gradient: gradient('#f5b23a', '#b45309'),
        cta: cta('See games', '', 'outline'),
      },
      {
        title: 'VIP club',
        body: 'Faster withdrawals and a personal host.',
        badge: 'Invite',
        badgeTone: 'gold',
        emoji: '👑',
        gradient: gradient('#7c3aed', '#312e81'),
        cta: cta('Learn more', '', 'ghost'),
      },
    ],
  },
  render: CardGrid,
}
