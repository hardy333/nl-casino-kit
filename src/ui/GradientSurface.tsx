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
      className={cn('relative isolate overflow-hidden rounded-block', className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
      }}
    >
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-8 select-none text-[10rem] leading-none opacity-15"
        >
          {watermark}
        </span>
      )}
      <div className="relative">{children}</div>
    </div>
  )
}
