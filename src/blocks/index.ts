import type { ComponentConfig } from '@puckeditor/core'
import type { BlockName } from '@/types'
import { accordionConfig } from './Accordion'
import { bigCarouselConfig } from './BigCarousel'
import { buttonRowConfig } from './ButtonRow'
import { cardGridConfig } from './CardGrid'
import { counterConfig } from './Counter'
import { dividerConfig } from './Divider'
import { dropdownMenuConfig } from './DropdownMenu'
import { gameCardConfig } from './GameCard'
import { gameButtonConfig } from './GameButton'
import { gameLaunchContainerConfig } from './GameLaunchContainer'
import { gameCardGridConfig } from './GameCardGrid'
import { gameCarouselConfig } from './GameCarousel'
import { gameShowcaseConfig } from './GameShowcase'
import { gameGridConfig } from './GameGrid'
import { headingConfig } from './Heading'
import { heroBannerConfig } from './HeroBanner'
import { jackpotTickerConfig } from './JackpotTicker'
import { modalOpenerConfig } from './ModalOpener'
import { promoCarouselConfig } from './PromoCarousel'
import { responsibleGamblingConfig } from './ResponsibleGambling'
import { smallHorizontalCarouselConfig } from './SmallHorizontalCarousel'
import { tabsConfig } from './Tabs'
import { textConfig } from './Text'
import { tournamentWidgetConfig } from './TournamentWidget'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BLOCKS: Record<BlockName, ComponentConfig<any>> = {
  HeroBanner: heroBannerConfig,
  GameGrid: gameGridConfig,
  GameCard: gameCardConfig,
  GameButton: gameButtonConfig,
  GameLaunchContainer: gameLaunchContainerConfig,
  GameCardGrid: gameCardGridConfig,
  GameCarousel: gameCarouselConfig,
  GameShowcase: gameShowcaseConfig,
  BigCarousel: bigCarouselConfig,
  SmallHorizontalCarousel: smallHorizontalCarouselConfig,
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

export const CATEGORIES: Record<
  string,
  { title: string; components: BlockName[]; defaultExpanded: boolean }
> = {
  base: {
    title: 'Base',
    defaultExpanded: true,
    components: [
      'Heading',
      'Text',
      'ButtonRow',
      'Divider',
      'Tabs',
      'Accordion',
      'DropdownMenu',
      'ModalOpener',
    ],
  },
  games: {
    title: 'Games',
    defaultExpanded: true,
    components: [
      'GameCard',
      'GameButton',
      'GameLaunchContainer',
      'GameGrid',
      'GameCardGrid',
      'GameShowcase',
    ],
  },
  carousels: {
    title: 'Carousels',
    defaultExpanded: false,
    components: [
      'BigCarousel',
      'SmallHorizontalCarousel',
      'GameCarousel',
      'PromoCarousel',
    ],
  },
  promotion: {
    title: 'Promotion',
    defaultExpanded: false,
    components: ['HeroBanner', 'CardGrid'],
  },
  complex: {
    title: 'Complex',
    defaultExpanded: false,
    components: ['JackpotTicker', 'TournamentWidget', 'Counter'],
  },
  compliance: {
    title: 'Compliance',
    defaultExpanded: false,
    components: ['ResponsibleGambling'],
  },
}
