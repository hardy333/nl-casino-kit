import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { TEXT_ALIGN_CLASS } from '@/ui/align'
import type { Align } from '@/types'

type BlockHeaderProps = {
  title?: string
  subtitle?: string
  align?: Align
  action?: ReactNode
}

export function BlockHeader({
  title,
  subtitle,
  align = 'left',
  action,
}: BlockHeaderProps) {
  if (!title && !subtitle && !action) return null

  return (
    <div
      className={cn(
        'mb-5 flex gap-4',
        align === 'center'
          ? 'flex-col items-center'
          : 'flex-wrap items-end justify-between',
      )}
    >
      <div className={cn('min-w-0', align === 'center' ? 'max-w-2xl' : 'flex-1', TEXT_ALIGN_CLASS[align])}>
        {title && (
          <h2 className="text-2xl font-bold tracking-tight text-balance text-body sm:text-3xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
