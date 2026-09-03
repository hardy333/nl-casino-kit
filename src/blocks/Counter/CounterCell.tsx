import { cn } from '@/lib/cn'
import { useCountUp } from './useCountUp'
import type { CounterAccent, CounterItem } from './types'

type CounterCellProps = {
  item: CounterItem
  durationMs: number
  accent: CounterAccent
}

const ACCENT_CLASS: Record<CounterAccent, string> = {
  brand: 'text-brand-hover text-glow-brand',
  gold: 'text-gold text-glow-gold',
  neon: 'text-neon',
  body: 'text-body',
}

export function CounterCell({ item, durationMs, accent }: CounterCellProps) {
  const value = useCountUp(item.value, durationMs)
  const decimals = Number.isInteger(item.value) ? 0 : 1

  return (
    <div className="min-w-40 flex-1 rounded-block bg-surface px-6 py-5 shadow-tile ring-1 ring-inset ring-border transition duration-300 ease-out-quart hover:ring-border-strong">
      <p
        className={cn(
          'font-mono text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl',
          ACCENT_CLASS[accent],
        )}
      >
        {item.prefix}
        {value.toLocaleString('en-US', {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        })}
        {item.suffix}
      </p>
      <p className="mt-2 text-[11px] font-semibold tracking-[0.18em] text-faint uppercase">
        {item.label}
      </p>
    </div>
  )
}
