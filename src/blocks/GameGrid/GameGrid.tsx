import { getGames } from '@/data/games'
import { ActionButton } from '@/ui/ActionButton'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import { GameTile } from '@/ui/GameTile'
import type { GameGridProps } from './types'

const COLUMN_CLASS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6',
}

export function GameGrid({
  title,
  subtitle,
  category,
  columns,
  maxGames,
  tileSize,
  hotOnly,
  showBadges,
  showJackpots,
  viewAll,
}: GameGridProps) {
  const games = getGames({ category, limit: maxGames, hotOnly })

  return (
    <BlockShell>
      <BlockHeader
        title={title}
        subtitle={subtitle}
        action={<ActionButton cta={viewAll} size="sm" />}
      />

      {games.length === 0 ? (
        <EmptyState title="No games match this selection" hint="Try a different category, or turn off hot-only." />
      ) : (
        <div className={`grid gap-3 ${COLUMN_CLASS[columns] ?? COLUMN_CLASS[4]}`}>
          {games.map((game) => (
            <GameTile
              key={game.id}
              game={game}
              size={tileSize}
              showBadge={showBadges}
              showJackpot={showJackpots}
            />
          ))}
        </div>
      )}
    </BlockShell>
  )
}
