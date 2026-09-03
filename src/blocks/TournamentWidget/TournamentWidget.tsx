import { compact, money } from '@/lib/money'
import { BlockShell } from '@/ui/BlockShell'
import { TournamentStat } from './TournamentStat'
import { useCountdown } from './useCountdown'
import type { TournamentWidgetProps } from './types'

export function TournamentWidget({
  title,
  prizePool,
  participants,
  durationHours,
  leaderboard,
}: TournamentWidgetProps) {
  const segments = useCountdown(durationHours)

  return (
    <BlockShell>
      <div className="overflow-hidden rounded-block border border-border bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-gradient-to-r from-brand/20 to-transparent px-5 py-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-brand-hover uppercase">Tournament</p>
            <h3 className="text-xl font-bold text-body">{title}</h3>
          </div>

          <div className="flex gap-2 font-mono text-lg font-bold tabular-nums text-body">
            {segments.map((part, index) => (
              <span key={index} className="rounded-md bg-surface-sunken px-2 py-1">
                {part}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 px-5 py-4 sm:grid-cols-3">
          <TournamentStat label="Prize pool" value={money(prizePool, 'EUR')} tone="text-gold" />
          <TournamentStat label="Players" value={compact(participants)} tone="text-body" />
          <TournamentStat label="Status" value="Live" tone="text-brand-hover" />
        </div>

        {leaderboard.length > 0 && (
          <ul className="divide-y divide-border border-t border-border">
            {leaderboard.map((row, index) => (
              <li key={index} className="flex items-center gap-3 px-5 py-2.5 text-sm">
                <span className="w-6 font-mono font-bold text-faint">{index + 1}</span>
                <span className="flex-1 text-body">{row.player}</span>
                <span className="font-mono tabular-nums text-muted">
                  {row.points.toLocaleString('en-US')}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </BlockShell>
  )
}
