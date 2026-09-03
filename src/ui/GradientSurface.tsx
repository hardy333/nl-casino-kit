import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import type { Gradient } from '@/types'

type GradientSurfaceProps = {
  gradient: Gradient
  watermark?: string
  className?: string
  children: ReactNode
}

export function GradientSurface({
  gradient,
  watermark,
  className,
  children,
}: GradientSurfaceProps) {
  return (
    <div
      className={cn(
        'relative isolate flex h-full flex-col overflow-hidden rounded-block shadow-block ring-1 ring-inset ring-white/10',
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(120% 90% at 12% 0%, rgb(255 255 255 / 0.28), transparent 60%), radial-gradient(90% 80% at 100% 100%, rgb(0 0 0 / 0.45), transparent 65%)',
        }}
      />

      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -bottom-12 rotate-12 scale-110 select-none text-[11rem] leading-none opacity-20 mix-blend-soft-light drop-shadow-2xl sm:text-[14rem]"
        >
          {watermark}
        </span>
      )}

      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  )
}
