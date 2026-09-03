import * as RadixDialog from '@radix-ui/react-dialog'
import { findNextLevelGame } from '@/data/nextLevelGames'
import { GameCardFace } from './GameCardFace'
import { gamePath, requestNavigate } from './gamePath'
import { launchUrl } from './launchUrl'
import type { GameCardProps } from './types'

const SHELL_CLASS =
  'block w-full cursor-pointer overflow-hidden rounded-block border border-border bg-surface text-left transition-transform duration-200 hover:-translate-y-1 hover:border-brand/50'

const DISABLED_CLASS =
  'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:border-border'

export function GameCard({ gameId, token, openMode = 'modal' }: GameCardProps) {
  const game = findNextLevelGame(gameId)

  if (!game) {
    return (
      <p className="rounded-block border border-dashed border-border p-8 text-center text-sm text-faint">
        Unknown game.
      </p>
    )
  }

  const hasToken = Boolean(token)

  if (openMode === 'redirect') {
    if (!hasToken) {
      return (
        <div className={`${SHELL_CLASS} cursor-not-allowed opacity-60 hover:translate-y-0 hover:border-border`}>
          <GameCardFace game={game} hasToken={false} />
        </div>
      )
    }

    return (
      <a
        href={gamePath(game.id, token)}
        onClick={(event) => requestNavigate(event, gamePath(game.id, token))}
        className={SHELL_CLASS}
      >
        <GameCardFace game={game} hasToken />
      </a>
    )
  }

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild disabled={!hasToken}>
        <button type="button" disabled={!hasToken} className={`${SHELL_CLASS} ${DISABLED_CLASS}`}>
          <GameCardFace game={game} hasToken={hasToken} />
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
