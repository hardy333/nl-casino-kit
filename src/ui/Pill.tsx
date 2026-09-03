import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type PillTone = 'brand' | 'gold' | 'neutral' | 'danger'

type PillProps = {
  children: ReactNode
  tone?: PillTone
}

const TONE_CLASS: Record<PillTone, string> = {
  brand: 'bg-brand/15 text-brand-hover ring-1 ring-inset ring-brand/25',
  gold: 'bg-gold/15 text-gold ring-1 ring-inset ring-gold/25',
  neutral: 'bg-surface-raised text-muted ring-1 ring-inset ring-border',
  danger: 'bg-danger/20 text-danger ring-1 ring-inset ring-danger/30',
}

export function Pill({ children, tone = 'neutral' }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-2 py-0.5 text-[10px] font-bold tracking-[0.08em] uppercase backdrop-blur-sm',
        TONE_CLASS[tone],
      )}
    >
      {children}
    </span>
  )
}
