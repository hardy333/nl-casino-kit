import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import { PromoPanel } from '@/ui/PromoPanel'
import type { PromoCarouselProps } from './types'

export function PromoCarousel({ title, slides, autoplay, intervalMs }: PromoCarouselProps) {
  const count = slides.length
  const [index, setIndex] = useState(0)
  const active = Math.min(index, Math.max(0, count - 1))

  useEffect(() => {
    if (!autoplay || count < 2) return

    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % count),
      Math.max(1500, intervalMs),
    )

    return () => window.clearInterval(timer)
  }, [autoplay, intervalMs, count])

  if (count === 0) {
    return (
      <BlockShell>
        <EmptyState title="No slides yet" hint="Add one in the Slides field." />
      </BlockShell>
    )
  }

  const slide = slides[active]

  return (
    <BlockShell>
      <BlockHeader title={title} />

      <PromoPanel
        eyebrow={slide.badge}
        title={slide.title}
        subtitle={slide.subtitle}
        glyph={slide.glyph}
        gradient={slide.background}
        ctas={[slide.action]}
        footer={
          count > 1 && (
            <div className="flex gap-2">
              {slides.map((_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Show slide ${dot + 1}`}
                  aria-current={dot === active}
                  onClick={() => setIndex(dot)}
                  className={cn(
                    'h-1.5 cursor-pointer rounded-pill transition-all duration-300 ease-out-quart',
                    dot === active
                      ? 'w-10 bg-white shadow-tile'
                      : 'w-3 bg-white/40 hover:w-5 hover:bg-white/70',
                  )}
                />
              ))}
            </div>
          )
        }
      />
    </BlockShell>
  )
}
