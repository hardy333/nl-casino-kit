import * as RadixAccordion from '@radix-ui/react-accordion'
import type { AccordionItem } from './types'

type AccordionPanelsProps = {
  items: AccordionItem[]
}

export function AccordionPanels({ items }: AccordionPanelsProps) {
  return (
    <>
      {items.map((item, index) => (
        <RadixAccordion.Item
          key={index}
          value={`item-${index}`}
          className="border-b border-border last:border-b-0"
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-body transition-colors duration-200 hover:bg-surface-raised/50 data-[state=open]:text-brand-hover">
              {item.question}
              <span className="grid size-7 shrink-0 place-items-center rounded-pill bg-surface-raised text-muted ring-1 ring-inset ring-border transition duration-300 ease-out-quart group-hover:text-body group-data-[state=open]:rotate-180 group-data-[state=open]:bg-brand group-data-[state=open]:text-brand-contrast">
                <svg viewBox="0 0 24 24" aria-hidden className="size-4">
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="overflow-hidden">
            <div className="px-5 pt-1 pb-5 text-sm leading-relaxed text-pretty text-muted">
              {item.answer}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </>
  )
}
