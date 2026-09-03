import type { ComponentConfig } from '@puckeditor/core'
import type { BlockName } from '@/types'
import { buttonRowConfig } from './ButtonRow'
import { cardGridConfig } from './CardGrid'
import { dividerConfig } from './Divider'
import { gameGridConfig } from './GameGrid'
import { headingConfig } from './Heading'
import { heroBannerConfig } from './HeroBanner'
import { textConfig } from './Text'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BLOCKS: Record<BlockName, ComponentConfig<any>> = {
  HeroBanner: heroBannerConfig,
  GameGrid: gameGridConfig,
  CardGrid: cardGridConfig,
  ButtonRow: buttonRowConfig,
  Heading: headingConfig,
  Text: textConfig,
  Divider: dividerConfig,
}

export const BLOCK_NAMES = Object.keys(BLOCKS) as BlockName[]

export const CATEGORIES: Record<string, { title: string; components: BlockName[] }> = {
  casino: {
    title: 'Casino',
    components: ['HeroBanner', 'GameGrid'],
  },
  content: {
    title: 'Content',
    components: ['CardGrid', 'Heading', 'Text'],
  },
  layout: {
    title: 'Layout',
    components: ['ButtonRow', 'Divider'],
  },
}
