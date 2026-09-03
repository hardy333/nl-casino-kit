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
          'flex items-center gap-4 rounded-block border border-gold/30 bg-gradient-to-r from-gold/15 to-transparent',
          isBar ? 'px-5 py-3' : 'flex-col px-6 py-8 text-center',
        )}
      >
        <span className="text-3xl" aria-hidden>
          💰
        </span>

        <div className={cn(isBar && 'flex-1')}>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{label}</p>
          <p
            className={cn(
              'font-mono font-extrabold tabular-nums text-body',
              isBar ? 'text-2xl' : 'text-4xl sm:text-6xl',
            )}
          >
            {money(amount, currency)}
          </p>
        </div>
      </div>
    </BlockShell>
  )
}
