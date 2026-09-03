import type { ComponentConfig } from '@puckeditor/core'
import { booleanField, colorField, columnsField } from '@/blocks/fields'
import { GameShowcase } from './GameShowcase'
import type { GameShowcaseProps } from './types'

export const gameShowcaseConfig: ComponentConfig<GameShowcaseProps> = {
  label: 'Game Showcase',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
    allLabel: { type: 'text', label: '"All" tab label' },
    columns: columnsField('Columns', 6),
    showCounts: booleanField('Counts on tabs'),
    games: {
      type: 'array',
      label: 'Games',
      getItemSummary: (item) => item.name || 'Game',
      defaultItemProps: {
        name: 'New game',
        tagline: '',
        category: 'Original',
        badge: '',
        emoji: '🎮',
        gradientFrom: '#7c3aed',
        gradientTo: '#312e81',
        href: '',
      },
      arrayFields: {
        name: { type: 'text', label: 'Name' },
        tagline: { type: 'text', label: 'Tagline' },
        category: { type: 'text', label: 'Category (becomes a tab)' },
        badge: { type: 'text', label: 'Corner badge' },
        emoji: { type: 'text', label: 'Emoji' },
        gradientFrom: colorField('Gradient from'),
        gradientTo: colorField('Gradient to'),
        href: { type: 'text', label: 'Link' },
      },
    },
  },
  defaultProps: {
    title: 'Our Games',
    subtitle: 'Crash, P2P and original titles — crafted in-house and ready to spin.',
    allLabel: 'All games',
    columns: 4,
    showCounts: true,
    games: [
      { name: 'Suit Runner', tagline: 'Aztec crash adventure', category: 'Original', badge: '', emoji: '🃏', gradientFrom: '#65a30d', gradientTo: '#1a2e05', href: '' },
      { name: 'Plinko Max', tagline: 'Plinko', category: 'Original', badge: '', emoji: '🔻', gradientFrom: '#7c3aed', gradientTo: '#2e1065', href: '' },
      { name: 'Strike', tagline: 'High-voltage multiplier', category: 'Crash', badge: '', emoji: '⚡', gradientFrom: '#0ea5e9', gradientTo: '#0c4a6e', href: '' },
      { name: 'Space Heroes', tagline: 'Slot x Crash mix', category: 'Original', badge: 'Coming soon', emoji: '🚀', gradientFrom: '#1d4ed8', gradientTo: '#0f172a', href: '' },
      { name: 'Rocket Dash', tagline: 'Cash out before the crash', category: 'Crash', badge: '', emoji: '🚀', gradientFrom: '#ef4444', gradientTo: '#7f1d1d', href: '' },
      { name: 'Duel Dice', tagline: 'Head-to-head rolls', category: 'P2P', badge: '', emoji: '🎲', gradientFrom: '#14b8a6', gradientTo: '#134e4a', href: '' },
      { name: 'Coin Clash', tagline: 'Winner takes the pot', category: 'P2P', badge: '', emoji: '🪙', gradientFrom: '#f5b23a', gradientTo: '#92400e', href: '' },
      { name: 'Mine Field', tagline: 'Pick your luck', category: 'Mini games', badge: '', emoji: '💣', gradientFrom: '#64748b', gradientTo: '#1e293b', href: '' },
    ],
  },
  render: GameShowcase,
}
