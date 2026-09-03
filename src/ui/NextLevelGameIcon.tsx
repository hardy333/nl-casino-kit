import type { ReactNode } from 'react'
import type { NextLevelGameId } from '@/data/nextLevelGames'

const PATHS: Record<NextLevelGameId, ReactNode> = {
  ufo: (
    <>
      <ellipse cx="12" cy="11" rx="9" ry="3.4" />
      <path d="M6.5 12.2 4 18h16l-2.5-5.8" />
      <path d="M9.5 8.2a2.5 2.5 0 0 1 5 0" />
    </>
  ),
  plinko: (
    <>
      <path d="M4 4v2M8 4v2M12 4v2M16 4v2M20 4v2" />
      <circle cx="6" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M12 13v3" />
      <rect x="4" y="18" width="16" height="3" rx="1" />
    </>
  ),
  chicken: (
    <>
      <path d="M9 21c0-3.5 1.5-6 5-6.5" />
      <circle cx="14" cy="9" r="5" />
      <path d="M18.5 7.5 21 6l-1 2.8-2 .3" />
      <path d="M11 8h.01" />
      <path d="M12.5 20.5 14 18M16 20.5 15 18" />
    </>
  ),
  aviator: (
    <>
      <path d="M2 13l8-2 3-8 2 1-2 7 6-1 3 3-7 2-3 6-2-1 2-6-6 1z" />
    </>
  ),
  lobby: (
    <>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.4" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.4" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.4" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="1.4" />
    </>
  ),
}

type NextLevelGameIconProps = {
  id: NextLevelGameId
  className?: string
}

export function NextLevelGameIcon({ id, className }: NextLevelGameIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[id]}
    </svg>
  )
}
