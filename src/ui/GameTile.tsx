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
  sm: 'aspect-[4/3] text-4xl',
  md: 'aspect-[4/3] text-5xl',
  lg: 'aspect-[3/4] text-6xl',
}

export function GameTile({
  game,
  size = 'md',
  showBadge = true,
  showJackpot = true,
}: GameTileProps) {
  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-tile bg-surface shadow-tile ring-1 ring-border transition-[scale,box-shadow] duration-200 ease-out-quart will-change-transform hover:scale-[1.03] hover:shadow-lifted focus-within:scale-[1.03]">
      <div className="relative overflow-hidden">
        <div
          className={cn(
            'flex items-center justify-center transition-transform duration-300 ease-out-quart will-change-transform group-hover:scale-105',
            SIZE_CLASS[size],
          )}
          style={{
            backgroundImage: `linear-gradient(145deg, ${game.gradient.from}, ${game.gradient.to})`,
          }}
        >
          <span className="drop-shadow-lg" aria-hidden>
            {game.emoji}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70" />

        {showBadge && game.isHot && (
          <div className="absolute top-2 left-2">
            <Pill tone="danger">Hot</Pill>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-surface-sunken/50 opacity-0 transition-opacity duration-200 ease-out-quart group-hover:opacity-100">
          <span className="rounded-pill bg-brand px-4 py-1.5 text-xs font-bold tracking-wide text-brand-contrast uppercase shadow-tile">
            Play
          </span>
        </div>
      </div>

      <div className="min-w-0 px-3 pt-2.5 pb-3">
        <h3 className="truncate text-sm font-semibold text-body">{game.name}</h3>
        <p className="mt-0.5 truncate text-[11px] tracking-wide text-faint uppercase">
          {game.provider}
        </p>
      </div>

      {showJackpot && (
        <p className="mt-auto border-t border-border/70 px-3 py-2 font-mono text-xs font-bold tabular-nums text-gold">
          {game.jackpot ?? ' '}
        </p>
      )}
    </article>
  )
}
