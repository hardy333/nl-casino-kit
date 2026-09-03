import { cn } from '@/lib/cn'
import { ActionButton } from '@/ui/ActionButton'
import { BlockShell } from '@/ui/BlockShell'
import type { Align } from '@/types'
import type { ButtonRowProps } from './types'

const ALIGN_CLASS: Record<Align, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
}

export function ButtonRow({ buttons, align, size, stackOnMobile }: ButtonRowProps) {
  if (!buttons.length) return <></>

  return (
    <BlockShell className="py-4">
      <div
        className={cn(
          'flex flex-wrap gap-3',
          ALIGN_CLASS[align],
          stackOnMobile && 'max-sm:flex-col max-sm:items-stretch',
        )}
      >
        {buttons.map((button, index) => (
          <ActionButton key={index} cta={button} size={size} />
        ))}
      </div>
    </BlockShell>
  )
}
