import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import { TEXT_ALIGN_CLASS } from '@/ui/align'
import type { TextProps, TextTone } from './types'

const TONE_CLASS: Record<TextTone, string> = {
  body: 'text-body',
  muted: 'text-muted',
}

export function Text({ body, align, tone }: TextProps) {
  const paragraphs = body.split(/\n{2,}/).filter(Boolean)

  if (!paragraphs.length) return <></>

  return (
    <BlockShell className="py-5">
      <div
        className={cn(
          'mx-auto max-w-[68ch] space-y-4 text-base leading-[1.7] text-pretty',
          TEXT_ALIGN_CLASS[align],
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
