import { BlockShell } from '@/ui/BlockShell'
import { PromoPanel } from '@/ui/PromoPanel'
import type { HeroBannerProps } from './types'

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
      <PromoPanel
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        glyph={watermark}
        gradient={gradient}
        ctas={ctas}
        align={align}
        height={height}
      />
    </BlockShell>
  )
}
