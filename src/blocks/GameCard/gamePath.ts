export const GAME_NAVIGATE_EVENT = 'nl:navigate'

export function gamePath(gameId: string, token: string) {
  return `/game/${gameId}?token=${encodeURIComponent(token)}`
}

/**
 * Lets a host app intercept in-app links without the kit depending on a router.
 * Falls back to a normal navigation when nothing is listening.
 */
export function requestNavigate(event: React.MouseEvent, to: string) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return

  const custom = new CustomEvent(GAME_NAVIGATE_EVENT, { detail: to, cancelable: true })
  const handled = !window.dispatchEvent(custom)

  if (handled) event.preventDefault()
}
