import * as RadixDialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import type { PuckComponent } from '@puckeditor/core'
import { findNextLevelGame } from '@/data/nextLevelGames'
import { fetchTestAuthToken } from '../GameCard/testAuth'
import { gamePath } from '../GameCard/gamePath'
import { launchUrl } from '../GameCard/launchUrl'
import type { GameLaunchContainerProps } from './types'

export const GameLaunchContainer: PuckComponent<GameLaunchContainerProps> = ({
  gameId,
  openMode = 'modal',
  content: Content,
}) => {
  const game = findNextLevelGame(gameId)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [token, setToken] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  if (!game) {
    return (
      <p className="rounded-block border border-dashed border-border p-4 text-center text-sm text-faint">
        Unknown game.
      </p>
    )
  }

  async function handleClick() {
    if (status === 'loading') return
    setStatus('loading')

    try {
      const nextToken = await fetchTestAuthToken(game!.id)

      if (openMode === 'redirect') {
        window.location.href = gamePath(game!.id, nextToken)
        return
      }

      setToken(nextToken)
      setStatus('idle')
      setIsOpen(true)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* display: contents means this element has no box of its own — it
          never adds size or affects layout, only its children render. Browsers
          drop `contents` elements from the accessibility tree, so this can't
          carry a button role or tab stop itself; put a real interactive
          element (a button, a link) inside as the child if keyboard access
          matters. */}
      <div onClick={handleClick} aria-busy={status === 'loading'} className="contents cursor-pointer">
        <Content />
      </div>

      {status === 'error' && (
        <p className="mt-2 text-xs text-gold">Could not start the game. Try again.</p>
      )}

      <RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
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

            {token && (
              <iframe
                src={launchUrl(game.baseUrl, token)}
                title={game.name}
                className="h-full w-full flex-1 border-0"
                allow="autoplay; fullscreen"
              />
            )}
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </>
  )
}
