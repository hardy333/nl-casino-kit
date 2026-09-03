import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { Carousel } from '@/ui/Carousel'
import { EmptyState } from '@/ui/EmptyState'
import { PromoPanel } from '@/ui/PromoPanel'
import type { PromoCarouselProps } from './types'

export function PromoCarousel({ title, slides, autoplay, intervalMs }: PromoCarouselProps) {
  if (slides.length === 0) {
    return (
      <BlockShell>
        <EmptyState title="No slides yet" hint="Add one in the Slides field." />
      </BlockShell>
    )
  }

  return (
    <BlockShell>
      <BlockHeader title={title} />

      <Carousel
        gap={false}
        autoplay={autoplay}
        intervalMs={intervalMs}
        showArrows={slides.length > 1}
        dotsInside
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex *:w-full">
            <PromoPanel
              eyebrow={slide.badge}
              title={slide.title}
              subtitle={slide.subtitle}
              glyph={slide.glyph}
              gradient={slide.background}
              ctas={[slide.action]}
            />
          </div>
        ))}
      </Carousel>
    </BlockShell>
  )
}
