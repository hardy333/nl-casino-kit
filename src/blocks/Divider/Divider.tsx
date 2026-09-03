import { cn } from '@/lib/cn'
import type { DividerProps, DividerSpacing } from './types'

const SPACING_CLASS: Record<DividerSpacing, string> = {
  sm: 'py-2',
  md: 'py-5',
  lg: 'py-10',
}

export function Divider({ style, spacing }: DividerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', SPACING_CLASS[spacing])}>
      {style === 'line' && <hr className="border-t border-border" />}
      {style === 'glow' && (
        <div className="h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
      )}
    </div>
  )
}
