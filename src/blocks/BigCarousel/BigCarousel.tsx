import type { PuckComponent } from '@puckeditor/core'
import { getGames } from '@/data/games'
import { ActionButton } from '@/ui/ActionButton'
import { BlockShell } from '@/ui/BlockShell'
import { Carousel } from '@/ui/Carousel'
import { EmptyState } from '@/ui/EmptyState'
import { GameTile } from '@/ui/GameTile'
import type { BigCarouselProps } from './types'

export const BigCarousel: PuckComponent<BigCarouselProps> = ({
  title,
  icon,
  source,
  category,
  maxGames,
  slidesToShow,
  showBadges,
  showJackpots,
  loop,
  autoplay,
  intervalMs,
  showAll,
  items: Items,
}) => {
  const games = source === 'catalogue' ? getGames({ category, limit: maxGames }) : []

  const header = (
    <div className="flex min-w-0 items-center gap-3">
      {icon && (
        <span className="text-xl leading-none" aria-hidden>
          {icon}
        </span>
      )}
      <h2 className="truncate text-lg font-bold tracking-[-0.02em] text-body sm:text-xl">
        {title}
      </h2>
      {showAll.label && (
        <div className="ml-2 shrink-0">
          <ActionButton cta={showAll} size="sm" />
        </div>
      )}
    </div>
  )

  if (source === 'slot') {
    return (
      <BlockShell>
        <Carousel
          slidesToShow={slidesToShow}
          loop={loop}
          autoplay={autoplay}
          intervalMs={intervalMs}
          showDots={false}
          headerArrows
          header={header}
          renderTrack={({ className, style }) => (
            <Items className={className} style={style} minEmptyHeight={220} />
          )}
        />
      </BlockShell>
    )
  }

  return (
    <BlockShell>
      {games.length === 0 ? (
        <>
          {header}
          <div className="mt-4">
            <EmptyState title="No games in this category" hint="Pick another category." />
          </div>
        </>
      ) : (
        <Carousel
          slidesToShow={slidesToShow}
          loop={loop}
          autoplay={autoplay}
          intervalMs={intervalMs}
          showDots={false}
          headerArrows
          header={header}
        >
          {games.map((game) => (
            <div key={game.id}>
              <GameTile
                game={game}
                size="lg"
                showBadge={showBadges}
                showJackpot={showJackpots}
              />
            </div>
          ))}
        </Carousel>
      )}
    </BlockShell>
  )
}
