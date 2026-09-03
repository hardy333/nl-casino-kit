import { cn } from '@/lib/cn'
import { ActionButton } from '@/ui/ActionButton'
import { BlockShell } from '@/ui/BlockShell'
import { GradientSurface } from '@/ui/GradientSurface'
import type { Align } from '@/types'
import type { HeroBannerProps, HeroHeight } from './types'

const ALIGN_CLASS: Record<Align, string> = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
}

const HEIGHT_CLASS: Record<HeroHeight, string> = {
  sm: 'min-h-48 px-6 py-8 sm:px-10',
  md: 'min-h-64 px-6 py-12 sm:px-12',
  lg: 'min-h-80 px-6 py-16 sm:px-14',
}

export function HeroBanner({
  eyebrow,
  title,
  subtitle,
  watermark,
  align,
  height,
  gradient,
  ctas,
}: HeroBannerProps) {
  return (
    <BlockShell>
      <GradientSurface gradient={gradient} watermark={watermark}>
        <div className={cn('flex flex-col justify-center', HEIGHT_CLASS[height], ALIGN_CLASS[align])}>
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {eyebrow}
            </p>
          )}

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">{subtitle}</p>
          )}

          {ctas.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {ctas.map((item, index) => (
                <ActionButton key={index} cta={item} />
              ))}
            </div>
          )}
        </div>
      </GradientSurface>
    </BlockShell>
  )
}
