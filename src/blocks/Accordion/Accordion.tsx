import * as RadixAccordion from '@radix-ui/react-accordion'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import { AccordionPanels } from './AccordionPanels'
import type { AccordionProps } from './types'

const ROOT_CLASS =
  'divide-y divide-border overflow-hidden rounded-block border border-border bg-surface'

export function Accordion({ title, subtitle, allowMultiple, items }: AccordionProps) {
  if (items.length === 0) {
    return (
      <BlockShell>
        <EmptyState title="No entries yet" hint="Add one in the Entries field." />
      </BlockShell>
    )
  }

  return (
    <BlockShell>
      <BlockHeader title={title} subtitle={subtitle} />

      {allowMultiple ? (
        <RadixAccordion.Root type="multiple" className={ROOT_CLASS}>
          <AccordionPanels items={items} />
        </RadixAccordion.Root>
      ) : (
        <RadixAccordion.Root type="single" collapsible className={ROOT_CLASS}>
          <AccordionPanels items={items} />
        </RadixAccordion.Root>
      )}
    </BlockShell>
  )
}
