import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import type { Align } from '@/types'

type BlockHeaderProps = {
  title?: string
  subtitle?: string
  align?: Align
  action?: ReactNode
}

const ALIGN_CLASS: Record<Align, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export function BlockHeader({
  title,
  subtitle,
  align = 'left',
  action,
}: BlockHeaderProps) {
  if (!title && !subtitle && !action) return null

  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div className={cn('min-w-0 flex-1', ALIGN_CLASS[align])}>
        {title && (
          <h2 className="text-lg font-semibold tracking-tight text-body sm:text-xl">
            {title}
          </h2>
        )}
        {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
