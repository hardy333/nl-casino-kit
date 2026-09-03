import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import { JUSTIFY_CLASS } from '@/ui/align'
import { CounterCell } from './CounterCell'
import type { CounterProps } from './types'

export function Counter({ items, durationMs, align, accent }: CounterProps) {
  return (
    <BlockShell>
      <div className={cn('flex flex-wrap gap-3', JUSTIFY_CLASS[align])}>
        {items.map((item, index) => (
          <CounterCell key={index} item={item} durationMs={durationMs} accent={accent} />
        ))}
      </div>
    </BlockShell>
  )
}
