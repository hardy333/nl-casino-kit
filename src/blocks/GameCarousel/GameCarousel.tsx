import { getGames } from '@/data/games'
import { ActionButton } from '@/ui/ActionButton'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { Carousel } from '@/ui/Carousel'
import { EmptyState } from '@/ui/EmptyState'
import { GameTile } from '@/ui/GameTile'
import type { GameCarouselProps } from './types'

export function GameCarousel({
  title,
  subtitle,
  category,
  maxGames,
  slidesToShow,
  hotOnly,
  showBadges,
  showJackpots,
  loop,
  autoplay,
  intervalMs,
  viewAll,
}: GameCarouselProps) {
  const games = getGames({ category, limit: maxGames, hotOnly })

  return (
    <BlockShell>
      {games.length === 0 ? (
        <EmptyState
          title="No games match this selection"
          hint="Try a different category, or turn off hot-only."
        />
      ) : (
        <Carousel
          slidesToShow={slidesToShow}
          loop={loop}
          autoplay={autoplay}
          intervalMs={intervalMs}
          showDots={false}
          headerArrows
          header={
            <BlockHeader
              isBare
              title={title}
              subtitle={subtitle}
              action={<ActionButton cta={viewAll} size="sm" />}
            />
          }
        >
          {games.map((game) => (
            <div key={game.id}>
              <GameTile
                game={game}
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
