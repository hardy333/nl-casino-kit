import type { ComponentConfig } from '@puckeditor/core'
import type { BlockName } from '@/types'
import { accordionConfig } from './Accordion'
import { buttonRowConfig } from './ButtonRow'
import { cardGridConfig } from './CardGrid'
import { counterConfig } from './Counter'
import { dividerConfig } from './Divider'
import { dropdownMenuConfig } from './DropdownMenu'
import { gameCardConfig } from './GameCard'
import { gameCardGridConfig } from './GameCardGrid'
import { gameCarouselConfig } from './GameCarousel'
import { gameGridConfig } from './GameGrid'
import { headingConfig } from './Heading'
import { heroBannerConfig } from './HeroBanner'
import { jackpotTickerConfig } from './JackpotTicker'
import { modalOpenerConfig } from './ModalOpener'
import { promoCarouselConfig } from './PromoCarousel'
import { responsibleGamblingConfig } from './ResponsibleGambling'
import { tabsConfig } from './Tabs'
import { textConfig } from './Text'
import { tournamentWidgetConfig } from './TournamentWidget'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BLOCKS: Record<BlockName, ComponentConfig<any>> = {
  HeroBanner: heroBannerConfig,
  GameGrid: gameGridConfig,
  GameCard: gameCardConfig,
  GameCardGrid: gameCardGridConfig,
  GameCarousel: gameCarouselConfig,
  PromoCarousel: promoCarouselConfig,
  JackpotTicker: jackpotTickerConfig,
  TournamentWidget: tournamentWidgetConfig,
  Tabs: tabsConfig,
  Accordion: accordionConfig,
  DropdownMenu: dropdownMenuConfig,
  ModalOpener: modalOpenerConfig,
  Counter: counterConfig,
  ButtonRow: buttonRowConfig,
  CardGrid: cardGridConfig,
  Heading: headingConfig,
  Text: textConfig,
  Divider: dividerConfig,
  ResponsibleGambling: responsibleGamblingConfig,
}

export const BLOCK_NAMES = Object.keys(BLOCKS) as BlockName[]

export const CATEGORIES: Record<string, { title: string; components: BlockName[] }> = {
  casino: {
    title: 'Casino',
    components: [
      'HeroBanner',
      'GameGrid',
      'GameCard',
      'GameCardGrid',
      'GameCarousel',
      'PromoCarousel',
      'JackpotTicker',
      'TournamentWidget',
    ],
  },
  interactive: {
    title: 'Interactive',
    components: ['Tabs', 'Accordion', 'DropdownMenu', 'ModalOpener', 'Counter'],
  },
  content: {
    title: 'Content',
    components: ['CardGrid', 'Heading', 'Text', 'ResponsibleGambling'],
  },
  layout: {
    title: 'Layout',
    components: ['ButtonRow', 'Divider'],
  },
}
