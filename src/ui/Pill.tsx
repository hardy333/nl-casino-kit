import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type PillTone = 'brand' | 'gold' | 'neutral' | 'danger'

type PillProps = {
  children: ReactNode
  tone?: PillTone
}

const TONE_CLASS: Record<PillTone, string> = {
  brand: 'bg-brand/15 text-brand-hover',
  gold: 'bg-gold/15 text-gold',
  neutral: 'bg-surface-raised text-muted',
  danger: 'bg-danger/15 text-danger',
}

export function Pill({ children, tone = 'neutral' }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
        TONE_CLASS[tone],
      )}
    >
      {children}
    </span>
  )
}
