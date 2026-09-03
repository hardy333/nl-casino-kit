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
            <RadixAccordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-semibold text-body hover:text-brand-hover">
              {item.question}
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="size-4 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="overflow-hidden px-4 pb-4 text-sm leading-relaxed text-muted">
            {item.answer}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </>
  )
}
