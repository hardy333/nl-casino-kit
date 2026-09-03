import { cn } from '@/lib/cn'
import { useCountUp } from './useCountUp'
import type { CounterAccent, CounterItem } from './types'

type CounterCellProps = {
  item: CounterItem
  durationMs: number
  accent: CounterAccent
}

const ACCENT_CLASS: Record<CounterAccent, string> = {
  brand: 'text-brand-hover',
  gold: 'text-gold',
  neon: 'text-neon',
  body: 'text-body',
}

export function CounterCell({ item, durationMs, accent }: CounterCellProps) {
  const value = useCountUp(item.value, durationMs)
  const decimals = Number.isInteger(item.value) ? 0 : 1

  return (
    <div className="rounded-block border border-border bg-surface px-5 py-4">
      <p
        className={cn(
          'font-mono text-3xl font-extrabold tabular-nums sm:text-4xl',
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
      <p className="mt-1 text-xs tracking-widest text-muted uppercase">{item.label}</p>
    </div>
  )
}
