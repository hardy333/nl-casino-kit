import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import type { Align } from '@/types'
import type { TextProps, TextTone } from './types'

const ALIGN_CLASS: Record<Align, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const TONE_CLASS: Record<TextTone, string> = {
  body: 'text-body',
  muted: 'text-muted',
}

export function Text({ body, align, tone }: TextProps) {
  const paragraphs = body.split(/\n{2,}/).filter(Boolean)

  if (!paragraphs.length) return <></>

  return (
    <BlockShell className="py-4">
      <div
        className={cn(
          'mx-auto max-w-3xl space-y-3 text-sm leading-relaxed sm:text-base',
          ALIGN_CLASS[align],
          TONE_CLASS[tone],
        )}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </BlockShell>
  )
}
