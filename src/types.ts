import type { Data } from '@puckeditor/core'

export type PageData = Data

export type PageId = 'home'

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
