import type { Data } from '@puckeditor/core'

export type PageData = Data

// Pages are rows in Supabase, created and renamed at runtime, so an id is any
// slug rather than a fixed union.
export type PageId = string

export type PageRecord = {
  id: PageId
  name: string
  description: string
  route: string
  icon: string
  position: number
  isEnabled: boolean
  isSystem: boolean
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

