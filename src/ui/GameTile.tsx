import { cn } from '@/lib/cn'
import { Pill } from '@/ui/Pill'
import type { Game } from '@/data/games'

type GameTileSize = 'sm' | 'md' | 'lg'

type GameTileProps = {
  game: Game
  size?: GameTileSize
  showBadge?: boolean
  showJackpot?: boolean
}

const SIZE_CLASS: Record<GameTileSize, string> = {
  sm: 'aspect-[4/3] text-3xl',
  md: 'aspect-[4/3] text-4xl',
  lg: 'aspect-[3/4] text-5xl',
}

export function GameTile({
  game,
  size = 'md',
  showBadge = true,
  showJackpot = true,
}: GameTileProps) {
  return (
    <article className="group overflow-hidden rounded-tile border border-border bg-surface transition-colors hover:border-border-strong">
      <div
        className={cn(
          'flex items-center justify-center transition-transform duration-300 group-hover:scale-105',
          SIZE_CLASS[size],
        )}
        style={{
          backgroundImage: `linear-gradient(140deg, ${game.gradient.from}, ${game.gradient.to})`,
        }}
      >
        <span aria-hidden>{game.emoji}</span>
      </div>

      <div className="flex items-start justify-between gap-2 px-3 py-2.5">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium text-body">{game.name}</h3>
          <p className="truncate text-xs text-faint">{game.provider}</p>
        </div>
        {showBadge && game.isHot && <Pill tone="danger">Hot</Pill>}
      </div>

      {showJackpot && game.jackpot && (
        <p className="border-t border-border px-3 py-2 text-xs font-semibold text-gold">
          {game.jackpot}
        </p>
      )}
    </article>
  )
}
