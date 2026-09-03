import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { ActionButton } from '@/ui/ActionButton'
import { GradientSurface } from '@/ui/GradientSurface'
import { TEXT_ALIGN_CLASS } from '@/ui/align'
import type { Align, Cta, Gradient } from '@/types'

export type PromoPanelHeight = 'sm' | 'md' | 'lg'

type PromoPanelProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  glyph?: string
  gradient: Gradient
  ctas?: Cta[]
  align?: Align
  height?: PromoPanelHeight
  footer?: ReactNode
}

const HEIGHT_CLASS: Record<PromoPanelHeight, string> = {
  sm: 'min-h-48 px-6 py-8 sm:px-10',
  md: 'min-h-64 px-6 py-12 sm:px-12',
  lg: 'min-h-80 px-6 py-16 sm:px-14',
}

const ITEMS_CLASS: Record<Align, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
}

export function PromoPanel({
  eyebrow,
  title,
  subtitle,
  glyph,
  gradient,
  ctas = [],
  align = 'left',
  height = 'md',
  footer,
}: PromoPanelProps) {
  return (
    <GradientSurface gradient={gradient} watermark={glyph}>
      <div
        className={cn(
          'flex flex-col justify-center',
          HEIGHT_CLASS[height],
          ITEMS_CLASS[align],
          TEXT_ALIGN_CLASS[align],
        )}
      >
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
            {eyebrow}
          </p>
        )}

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>

        {subtitle && <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">{subtitle}</p>}

        {ctas.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((item, index) => (
              <ActionButton key={index} cta={item} />
            ))}
          </div>
        )}

        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </GradientSurface>
  )
}
