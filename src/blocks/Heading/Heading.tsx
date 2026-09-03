import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import { TEXT_ALIGN_CLASS } from '@/ui/align'
import type { HeadingLevel, HeadingProps } from './types'

const LEVEL_CLASS: Record<HeadingLevel, string> = {
  h1: 'text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl',
  h2: 'text-3xl font-bold tracking-[-0.02em] sm:text-4xl',
  h3: 'text-xl font-bold tracking-tight sm:text-2xl',
  h4: 'text-base font-bold tracking-wide uppercase',
}

export function Heading({ text, level, align }: HeadingProps) {
  const Tag = level

  return (
    <BlockShell className="py-5">
      <Tag className={cn('text-balance text-body', LEVEL_CLASS[level], TEXT_ALIGN_CLASS[align])}>
        {text}
      </Tag>
    </BlockShell>
  )
}
