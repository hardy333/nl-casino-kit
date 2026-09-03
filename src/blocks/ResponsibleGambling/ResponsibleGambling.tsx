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
    <BlockShell className="py-6">
      <div
        className={cn(
          'flex flex-wrap items-center gap-4 rounded-block px-5 py-4 text-xs ring-1 ring-inset',
          variant === 'strong'
            ? 'bg-danger/10 text-body ring-danger/35'
            : 'bg-surface/60 text-muted ring-border',
        )}
      >
        {showAgeBadge && (
          <span className="grid size-10 shrink-0 place-items-center rounded-pill text-sm font-bold ring-2 ring-current">
            {minAge}+
          </span>
        )}

        <p className="min-w-48 flex-1 leading-relaxed text-pretty">{message}</p>

        {helplineLabel && (
          <a
            href={helplineHref}
            className="font-semibold whitespace-nowrap text-brand-hover underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            {helplineLabel}
          </a>
        )}
      </div>
    </BlockShell>
  )
}
