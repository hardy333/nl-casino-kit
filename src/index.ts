export { BLOCKS, BLOCK_NAMES, CATEGORIES } from './blocks'
export { buildEditorConfig, buildRendererConfig } from './config'
export { migrateData } from './lib/migrate'
export { cn } from './lib/cn'
export { money, compact } from './lib/money'

export { CanvasSurface } from './ui/CanvasSurface'
export { BlockShell } from './ui/BlockShell'
export { BlockHeader } from './ui/BlockHeader'
export { ActionButton } from './ui/ActionButton'
export { GradientSurface } from './ui/GradientSurface'
export { GameTile } from './ui/GameTile'
export { Pill } from './ui/Pill'
export { EmptyState } from './ui/EmptyState'
export { PromoPanel } from './ui/PromoPanel'
export { JUSTIFY_CLASS, TEXT_ALIGN_CLASS } from './ui/align'

export { GAMES, GAME_CATEGORIES, getGames, getGameById } from './data/games'
export type { Game, GameCategory } from './data/games'

export * from './blocks/fields'

export { LOCALES, LOCALE_IDS, DEFAULT_LOCALE, isLocale, rowsToMap } from './i18n'
export type { Locale, LocaleDefinition, TranslationRow, TranslationMap } from './i18n'

export { PAGES, PAGE_IDS, isPageId } from './types'
export type {
  PageData,
  PageId,
  PageDefinition,
  BlockName,
  Align,
  ButtonVariant,
  ButtonSize,
  Cta,
  Gradient,
} from './types'
