import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import type { ResponsibleGamblingProps } from './types'

export function ResponsibleGambling({
  message,
  helplineLabel,
  helplineHref,
  minAge,
  showAgeBadge,
  variant,
}: ResponsibleGamblingProps) {
  return (
    <BlockShell>
      <div
        className={cn(
          'flex flex-wrap items-center gap-4 rounded-block border px-4 py-3 text-xs',
          variant === 'strong'
            ? 'border-danger/40 bg-danger/10 text-body'
            : 'border-border bg-surface text-muted',
        )}
      >
        {showAgeBadge && (
          <span className="grid size-9 shrink-0 place-items-center rounded-pill border-2 border-current font-bold">
            {minAge}+
          </span>
        )}

        <p className="flex-1 leading-relaxed">{message}</p>

        {helplineLabel && (
          <a
            href={helplineHref}
            className="font-semibold text-brand-hover underline-offset-2 hover:underline"
          >
            {helplineLabel}
          </a>
        )}
      </div>
    </BlockShell>
  )
}
