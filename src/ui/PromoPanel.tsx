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
  sm: 'min-h-52 px-6 py-10 sm:px-10',
  md: 'min-h-72 px-6 py-14 sm:px-12',
  lg: 'min-h-[26rem] px-6 py-20 sm:px-16',
}

const TITLE_CLASS: Record<PromoPanelHeight, string> = {
  sm: 'text-3xl sm:text-4xl',
  md: 'text-4xl sm:text-5xl',
  lg: 'text-4xl sm:text-6xl',
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
          <p className="mb-3 inline-flex items-center rounded-pill bg-black/25 px-3 py-1 text-[11px] font-bold tracking-[0.22em] text-white/85 uppercase ring-1 ring-inset ring-white/20 backdrop-blur-sm">
            {eyebrow}
          </p>
        )}

        <h2
          className={cn(
            'max-w-3xl font-extrabold tracking-[-0.03em] text-balance text-white drop-shadow-[0_2px_12px_rgb(0_0_0/0.35)]',
            TITLE_CLASS[height],
          )}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}

        {ctas.length > 0 && (
          <div className={cn('mt-8 flex flex-wrap gap-3', align === 'center' && 'justify-center')}>
            {ctas.map((item, index) => (
              <ActionButton key={index} cta={item} size="lg" />
            ))}
          </div>
        )}

        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </GradientSurface>
  )
}
