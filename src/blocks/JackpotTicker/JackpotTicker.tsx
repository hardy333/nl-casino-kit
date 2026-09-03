import { cn } from '@/lib/cn'
import { money } from '@/lib/money'
import { BlockShell } from '@/ui/BlockShell'
import { useTickingAmount } from './useTickingAmount'
import type { JackpotTickerProps } from './types'

export function JackpotTicker({
  label,
  startAmount,
  currency,
  tickAmount,
  tickMs,
  variant,
}: JackpotTickerProps) {
  const amount = useTickingAmount(startAmount, tickAmount, tickMs)
  const isBar = variant === 'bar'

  return (
    <BlockShell>
      <div
        className={cn(
          'relative isolate flex items-center gap-5 overflow-hidden rounded-block bg-surface-sunken shadow-block ring-1 ring-inset ring-gold/25',
          isBar ? 'px-6 py-4' : 'flex-col px-6 py-12 text-center',
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              'radial-gradient(80% 140% at 0% 50%, oklch(82% 0.15 82 / 0.22), transparent 70%)',
          }}
        />

        <span className={cn('relative drop-shadow-lg', isBar ? 'text-4xl' : 'text-6xl')} aria-hidden>
          💰
        </span>

        <div className={cn('relative', isBar && 'flex-1')}>
          <p className="text-[11px] font-bold tracking-[0.24em] text-gold/90 uppercase">{label}</p>
          <p
            className={cn(
              'font-mono font-extrabold tracking-tight tabular-nums text-glow-gold text-body',
              isBar ? 'text-3xl sm:text-4xl' : 'mt-1 text-5xl sm:text-7xl',
            )}
          >
            {money(amount, currency)}
          </p>
        </div>
      </div>
    </BlockShell>
  )
}
