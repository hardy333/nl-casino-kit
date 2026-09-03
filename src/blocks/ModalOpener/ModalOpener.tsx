import * as RadixDialog from '@radix-ui/react-dialog'
import type { PuckComponent } from '@puckeditor/core'
import { cn } from '@/lib/cn'
import { ActionButton } from '@/ui/ActionButton'
import { BlockShell } from '@/ui/BlockShell'
import { JUSTIFY_CLASS } from '@/ui/align'
import type { ModalOpenerProps } from './types'

export const ModalOpener: PuckComponent<ModalOpenerProps> = ({
  trigger,
  triggerSize,
  align,
  title,
  description,
  content: Content,
}) => {
  return (
    <BlockShell>
      <div className={cn('flex', JUSTIFY_CLASS[align])}>
        <RadixDialog.Root>
          <RadixDialog.Trigger asChild>
            <span>
              <ActionButton cta={trigger} size={triggerSize} />
            </span>
          </RadixDialog.Trigger>

          <RadixDialog.Portal>
            <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
            <RadixDialog.Content className="fixed top-1/2 left-1/2 z-50 w-[min(90vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-block border border-border bg-surface-sunken p-6 shadow-2xl focus:outline-none">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  {title && (
                    <RadixDialog.Title className="text-lg font-semibold tracking-tight text-body">
                      {title}
                    </RadixDialog.Title>
                  )}
                  {description && (
                    <RadixDialog.Description className="mt-1 text-sm text-muted">
                      {description}
                    </RadixDialog.Description>
                  )}
                </div>

                <RadixDialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close"
                    className="rounded-tile p-1 text-muted transition-colors hover:bg-surface-raised hover:text-body"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden className="size-4">
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </RadixDialog.Close>
              </div>

              <Content />
            </RadixDialog.Content>
          </RadixDialog.Portal>
        </RadixDialog.Root>
      </div>
    </BlockShell>
  )
}
