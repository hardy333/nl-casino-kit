import type { Data } from '@puckeditor/core'

export type PageData = Data

export type PageId = 'home' | 'our-games' | 'about-us'

export type PageDefinition = {
  id: PageId
  name: string
  description: string
  allowed: BlockName[]
  required: BlockName[]
}

export type BlockName =
  | 'HeroBanner'
  | 'GameGrid'
  | 'PromoCarousel'
  | 'JackpotTicker'
  | 'TournamentWidget'
  | 'Tabs'
  | 'Accordion'
  | 'DropdownMenu'
  | 'ModalOpener'
  | 'Counter'
  | 'ButtonRow'
  | 'CardGrid'
  | 'Heading'
  | 'Text'
  | 'Divider'
  | 'ResponsibleGambling'
  | 'GameCard'
  | 'GameCardGrid'
  | 'GameCarousel'
  | 'GameShowcase'
  | 'BigCarousel'
  | 'SmallHorizontalCarousel'

export type Align = 'left' | 'center' | 'right'
export type ButtonVariant = 'neon' | 'gold' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type Cta = {
  label: string
  href: string
  variant: ButtonVariant
}

export type Gradient = {
  from: string
  to: string
}

export const PAGES: Record<PageId, PageDefinition> = {
  home: {
    id: 'home',
    name: 'Home',
    description: 'The casino landing page',
    allowed: [
      'HeroBanner',
      'GameGrid',
      'PromoCarousel',
      'JackpotTicker',
      'TournamentWidget',
      'Tabs',
      'Accordion',
      'DropdownMenu',
      'ModalOpener',
      'Counter',
      'ButtonRow',
      'CardGrid',
      'Heading',
      'Text',
      'Divider',
      'ResponsibleGambling',
      'GameCard',
      'GameCardGrid',
      'GameCarousel',
      'GameShowcase',
      'BigCarousel',
      'SmallHorizontalCarousel',
    ],
    required: [],
  },

  'our-games': {
    id: 'our-games',
    name: 'Our Games',
    description: 'The full game catalogue',
    allowed: [
      'HeroBanner',
      'GameGrid',
      'PromoCarousel',
      'JackpotTicker',
      'TournamentWidget',
      'Tabs',
      'Accordion',
      'DropdownMenu',
      'ModalOpener',
      'Counter',
      'ButtonRow',
      'CardGrid',
      'Heading',
      'Text',
      'Divider',
      'ResponsibleGambling',
      'GameCard',
      'GameCardGrid',
      'GameCarousel',
      'GameShowcase',
      'BigCarousel',
      'SmallHorizontalCarousel',
    ],
    required: [],
  },
  'about-us': {
    id: 'about-us',
    name: 'About Us',
    description: 'Who we are and how we operate',
    allowed: [
      'HeroBanner',
      'GameGrid',
      'PromoCarousel',
      'JackpotTicker',
      'TournamentWidget',
      'Tabs',
      'Accordion',
      'DropdownMenu',
      'ModalOpener',
      'Counter',
      'ButtonRow',
      'CardGrid',
      'Heading',
      'Text',
      'Divider',
      'ResponsibleGambling',
      'GameCard',
      'GameCardGrid',
      'GameCarousel',
      'GameShowcase',
      'BigCarousel',
      'SmallHorizontalCarousel',
    ],
    required: [],
  },
}

export const PAGE_IDS = Object.keys(PAGES) as PageId[]

export function isPageId(value: string): value is PageId {
  return value in PAGES
}
