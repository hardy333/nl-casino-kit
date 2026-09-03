import * as RadixMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import { JUSTIFY_CLASS } from '@/ui/align'
import type { ButtonVariant } from '@/types'
import type { DropdownMenuProps } from './types'

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  neon: 'bg-brand text-brand-contrast hover:bg-brand-hover',
  gold: 'bg-gold text-gold-contrast hover:bg-gold-hover',
  outline: 'border border-border-strong text-body hover:border-brand hover:text-brand-hover',
  ghost: 'text-muted hover:bg-surface-raised hover:text-body',
}

export function DropdownMenu({ trigger, variant, align, entries }: DropdownMenuProps) {
  return (
    <BlockShell>
      <div className={cn('flex', JUSTIFY_CLASS[align])}>
        <RadixMenu.Root>
          <RadixMenu.Trigger
            className={cn(
              'inline-flex cursor-pointer items-center gap-2 rounded-pill px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              VARIANT_CLASS[variant],
            )}
          >
            {trigger}
            <svg viewBox="0 0 24 24" aria-hidden className="size-4">
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </RadixMenu.Trigger>

          <RadixMenu.Portal>
            <RadixMenu.Content
              sideOffset={6}
              align="start"
              className="z-50 min-w-52 rounded-block border border-border bg-surface p-1.5 shadow-2xl shadow-black/50"
            >
              {entries.map((entry, index) => (
                <div key={index}>
                  <RadixMenu.Item asChild>
                    <a
                      href={entry.href}
                      className="flex cursor-pointer items-center gap-2 rounded-tile px-3 py-2 text-sm text-body outline-none data-[highlighted]:bg-surface-raised"
                    >
                      {entry.icon && <span aria-hidden>{entry.icon}</span>}
                      {entry.label}
                    </a>
                  </RadixMenu.Item>
                  {entry.separatorAfter && (
                    <RadixMenu.Separator className="my-1.5 h-px bg-border" />
                  )}
                </div>
              ))}
            </RadixMenu.Content>
          </RadixMenu.Portal>
        </RadixMenu.Root>
      </div>
    </BlockShell>
  )
}
