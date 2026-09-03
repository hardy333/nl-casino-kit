import { cn } from '@/lib/cn'
import type { DividerProps, DividerSpacing } from './types'

const SPACING_CLASS: Record<DividerSpacing, string> = {
  sm: 'py-3',
  md: 'py-6',
  lg: 'py-12',
}

export function Divider({ style, spacing }: DividerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6', SPACING_CLASS[spacing])}>
      {style === 'line' && (
        <div className="h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      )}
      {style === 'glow' && (
        <div className="relative h-px bg-gradient-to-r from-transparent via-brand to-transparent">
          <div className="absolute inset-x-0 -top-2 h-4 bg-gradient-to-r from-transparent via-brand/25 to-transparent blur-md" />
        </div>
      )}
    </div>
  )
}
