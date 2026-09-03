import { cn } from '@/lib/cn'
import { compact, money } from '@/lib/money'
import { BlockShell } from '@/ui/BlockShell'
import { Pill } from '@/ui/Pill'
import { TournamentStat } from './TournamentStat'
import { useCountdown } from './useCountdown'
import type { TournamentWidgetProps } from './types'

const RANK_CLASS = [
  'bg-gold/20 text-gold ring-gold/30',
  'bg-surface-raised text-body ring-border-strong',
  'bg-gold/10 text-gold/80 ring-gold/20',
]

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
      <div className="overflow-hidden rounded-block bg-surface shadow-block ring-1 ring-inset ring-border">
        <div
          className="relative flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-5"
          style={{
            backgroundImage:
              'radial-gradient(90% 160% at 0% 50%, oklch(66% 0.19 156 / 0.28), transparent 70%)',
          }}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-pill bg-brand-hover" aria-hidden />
              <p className="text-[11px] font-bold tracking-[0.24em] text-brand-hover uppercase">
                Live tournament
              </p>
            </div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-body">{title}</h3>
          </div>

          <div className="flex gap-1.5">
            {segments.map((part, index) => (
              <span
                key={index}
                className="rounded-tile bg-surface-sunken px-3 py-2 font-mono text-xl font-bold tabular-nums text-body ring-1 ring-inset ring-border"
              >
                {part}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 px-6 py-5 sm:grid-cols-3">
          <TournamentStat label="Prize pool" value={money(prizePool, 'EUR')} tone="text-gold" />
          <TournamentStat label="Players" value={compact(participants)} tone="text-body" />
          <TournamentStat label="Entry" value="Free" tone="text-brand-hover" />
        </div>

        {leaderboard.length > 0 && (
          <ul className="border-t border-border">
            {leaderboard.map((row, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-border/60 px-6 py-3 text-sm transition-colors duration-200 last:border-b-0 hover:bg-surface-raised/60"
              >
                <span
                  className={cn(
                    'grid size-6 shrink-0 place-items-center rounded-pill font-mono text-xs font-bold ring-1 ring-inset',
                    RANK_CLASS[index] ?? 'bg-surface-sunken text-faint ring-border',
                  )}
                >
                  {index + 1}
                </span>
                <span className="flex-1 truncate font-medium text-body">{row.player}</span>
                {index === 0 && <Pill tone="gold">Leader</Pill>}
                <span className="font-mono text-sm font-semibold tabular-nums text-muted">
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
