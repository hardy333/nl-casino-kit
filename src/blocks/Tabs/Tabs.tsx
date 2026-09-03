import * as RadixTabs from '@radix-ui/react-tabs'
import type { PuckComponent } from '@puckeditor/core'
import { cn } from '@/lib/cn'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import type { TabsProps, TabVariant } from './types'

const TRIGGER_CLASS: Record<TabVariant, string> = {
  pill: 'rounded-pill px-4 py-2 data-[state=active]:bg-brand data-[state=active]:text-brand-contrast data-[state=active]:shadow-tile',
  underline:
    'rounded-none border-b-2 border-transparent px-1 py-3 data-[state=active]:border-brand data-[state=active]:text-brand-hover',
}

export const Tabs: PuckComponent<TabsProps> = ({ title, subtitle, variant, tabs }) => {
  if (tabs.length === 0) {
    return (
      <BlockShell>
        <EmptyState title="No tabs yet" hint="Add one in the Tabs field." />
      </BlockShell>
    )
  }

  return (
    <BlockShell>
      <BlockHeader title={title} subtitle={subtitle} />

      <RadixTabs.Root defaultValue="tab-0" className="w-full">
        <RadixTabs.List
          className={cn(
            'flex flex-wrap',
            variant === 'pill'
              ? 'gap-1.5 rounded-pill bg-surface p-1.5 ring-1 ring-inset ring-border'
              : 'gap-8 border-b border-border',
          )}
        >
          {tabs.map((tab, index) => (
            <RadixTabs.Trigger
              key={index}
              value={`tab-${index}`}
              className={cn(
                'cursor-pointer text-sm font-semibold text-muted select-none transition duration-200 ease-out-quart hover:text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                TRIGGER_CLASS[variant],
              )}
            >
              {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
              {tab.label}
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>

        {tabs.map((tab, index) => (
          <RadixTabs.Content
            key={index}
            value={`tab-${index}`}
            className="pt-6 focus-visible:outline-none"
          >
            <tab.content />
          </RadixTabs.Content>
        ))}
      </RadixTabs.Root>
    </BlockShell>
  )
}
