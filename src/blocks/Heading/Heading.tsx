import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import type { Align } from '@/types'
import type { HeadingLevel, HeadingProps } from './types'

const ALIGN_CLASS: Record<Align, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const LEVEL_CLASS: Record<HeadingLevel, string> = {
  h1: 'text-3xl font-bold tracking-tight sm:text-4xl',
  h2: 'text-2xl font-semibold tracking-tight sm:text-3xl',
  h3: 'text-xl font-semibold sm:text-2xl',
  h4: 'text-lg font-semibold',
}

export function Heading({ text, level, align }: HeadingProps) {
  const Tag = level

  return (
    <BlockShell className="py-4">
      <Tag className={cn('text-body', LEVEL_CLASS[level], ALIGN_CLASS[align])}>
        {text}
      </Tag>
    </BlockShell>
  )
}
