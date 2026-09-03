import * as RadixDialog from '@radix-ui/react-dialog'
import { findNextLevelGame } from '@/data/nextLevelGames'
import { GradientSurface } from '@/ui/GradientSurface'
import { NextLevelGameIcon } from '@/ui/NextLevelGameIcon'
import { launchUrl } from './launchUrl'
import type { GameCardProps } from './types'

export function GameCard({ gameId, token }: GameCardProps) {
  const game = findNextLevelGame(gameId)

  if (!game) {
    return (
      <p className="rounded-block border border-dashed border-border p-8 text-center text-sm text-faint">
        Unknown game.
      </p>
    )
  }

  const hasToken = Boolean(token)

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild disabled={!hasToken}>
        <button
          type="button"
          disabled={!hasToken}
          className="w-full cursor-pointer overflow-hidden rounded-block border border-border bg-surface text-left transition-transform duration-200 hover:-translate-y-1 hover:border-brand/50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:border-border"
        >
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
        </button>
      </RadixDialog.Trigger>

      {hasToken && (
        <RadixDialog.Portal>
          <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
          <RadixDialog.Content className="fixed inset-2 z-50 flex flex-col overflow-hidden rounded-block border border-border bg-surface-sunken shadow-2xl focus:outline-none sm:inset-6">
            <RadixDialog.Title className="sr-only">{game.name}</RadixDialog.Title>
            <RadixDialog.Description className="sr-only">
              Play {game.name} by Next Level Games
            </RadixDialog.Description>

            <div className="flex items-center justify-end border-b border-border px-3 py-2">
              <RadixDialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded-tile p-1.5 text-muted transition-colors hover:bg-surface-raised hover:text-body"
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </RadixDialog.Close>
            </div>

            <iframe
              src={launchUrl(game.baseUrl, token)}
              title={game.name}
              className="h-full w-full flex-1 border-0"
              allow="autoplay; fullscreen"
            />
          </RadixDialog.Content>
        </RadixDialog.Portal>
      )}
    </RadixDialog.Root>
  )
}
