import { GradientSurface } from '@/ui/GradientSurface'
import { NextLevelGameIcon } from '@/ui/NextLevelGameIcon'
import type { NextLevelGame } from '@/data/nextLevelGames'

type GameCardFaceProps = {
  game: NextLevelGame
  hasToken: boolean
}

export function GameCardFace({ game, hasToken }: GameCardFaceProps) {
  return (
    <>
      <GradientSurface
        gradient={{ from: '#7c2d12', to: '#f5c451' }}
        className="flex aspect-square items-center justify-center"
      >
        <NextLevelGameIcon id={game.id} className="size-16 text-black/70" />
      </GradientSurface>

      <div className="flex flex-col gap-1 p-4">
        <p className="text-xs tracking-widest text-muted uppercase">Next Level Games</p>
        <h3 className="text-base font-semibold text-body">{game.name}</h3>
        {!hasToken && <p className="text-xs text-gold">No token set — card is disabled</p>}
      </div>
    </>
  )
}
