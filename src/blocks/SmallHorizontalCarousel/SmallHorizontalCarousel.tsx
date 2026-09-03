import { getGames } from '@/data/games'
import { BlockShell } from '@/ui/BlockShell'
import { Carousel } from '@/ui/Carousel'
import { EmptyState } from '@/ui/EmptyState'
import { WinTileCard } from './WinTile'
import type { SmallHorizontalCarouselProps, WinTile } from './types'

function fromCatalogue(
  category: SmallHorizontalCarouselProps['category'],
  maxItems: number,
): WinTile[] {
  return getGames({ category, limit: maxItems }).map((game) => ({
    label: game.name,
    amount: game.jackpot ?? `${(Math.random() * 40 + 1).toFixed(2)}K`,
    currency: 'EUR',
    emoji: game.emoji,
    gradientFrom: game.gradient.from,
    gradientTo: game.gradient.to,
  }))
}

export function SmallHorizontalCarousel({
  title,
  source,
  category,
  maxItems,
  tileWidth,
  showLiveDot,
  autoplay,
  intervalMs,
  tiles,
}: SmallHorizontalCarouselProps) {
  const items = source === 'catalogue' ? fromCatalogue(category, maxItems) : tiles

  return (
    <BlockShell>
      {title && (
        <div className="mb-3 flex items-center gap-2.5">
          {showLiveDot && (
            <span className="relative grid size-2.5 place-items-center">
              <span className="absolute size-2.5 animate-ping rounded-pill bg-brand/60" />
              <span className="size-2 rounded-pill bg-brand" />
            </span>
          )}
          <h2 className="text-lg font-bold tracking-[-0.02em] text-body sm:text-xl">{title}</h2>
        </div>
      )}

      {items.length === 0 ? (
        <EmptyState title="Nothing to show" hint="Add a tile, or pick a category with games." />
      ) : (
        <Carousel
          tileWidth={tileWidth}
          loop={false}
          autoplay={autoplay}
          intervalMs={intervalMs}
          showArrows={false}
          showDots={false}
          edgeFade
        >
          {items.map((tile, index) => (
            <div key={index}>
              <WinTileCard {...tile} />
            </div>
          ))}
        </Carousel>
      )}
    </BlockShell>
  )
}
