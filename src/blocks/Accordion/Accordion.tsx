import * as RadixAccordion from '@radix-ui/react-accordion'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import { AccordionPanels } from './AccordionPanels'
import type { AccordionProps } from './types'

const ROOT_CLASS =
  'overflow-hidden rounded-block bg-surface shadow-tile ring-1 ring-inset ring-border'

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
