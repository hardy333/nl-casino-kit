import type { ShowcaseGame } from './types'

type ShowcaseCardProps = {
  game: ShowcaseGame
}

export function ShowcaseCard({ game }: ShowcaseCardProps) {
  const Tag = game.href ? 'a' : 'div'

  return (
    <Tag
      {...(game.href ? { href: game.href } : {})}
      className="group flex h-full flex-col overflow-hidden rounded-block bg-surface shadow-tile ring-1 ring-border transition-[scale,box-shadow] duration-200 ease-out-quart hover:scale-[1.02] hover:shadow-lifted"
    >
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(145deg, ${game.gradientFrom}, ${game.gradientTo})`,
        }}
      >
        <span className="text-5xl drop-shadow-lg transition-transform duration-300 ease-out-quart group-hover:scale-105" aria-hidden>
          {game.emoji}
        </span>

        {game.category && (
          <span className="absolute top-3 left-3 rounded-pill bg-black/55 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-sm">
            {game.category}
          </span>
        )}

        {game.badge && (
          <span className="absolute top-3 right-3 rounded-pill bg-brand px-2.5 py-1 text-[10px] font-bold tracking-widest text-brand-contrast uppercase">
            {game.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-base font-bold text-body">{game.name}</h3>
        {game.tagline && <p className="text-sm text-muted">{game.tagline}</p>}
      </div>
    </Tag>
  )
}
