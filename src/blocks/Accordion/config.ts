import type { ComponentConfig } from '@puckeditor/core'
import { Accordion } from './Accordion'
import type { AccordionProps } from './types'

export const accordionConfig: ComponentConfig<AccordionProps> = {
  label: 'Accordion',
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    allowMultiple: {
      type: 'radio',
      label: 'Open behaviour',
      options: [
        { label: 'One at a time', value: false },
        { label: 'Multiple', value: true },
      ],
    },
    items: {
      type: 'array',
      label: 'Entries',
      getItemSummary: (item) => item.question || 'Entry',
      defaultItemProps: { question: 'New question', answer: 'Answer text.' },
      arrayFields: {
        question: { type: 'text', label: 'Question' },
        answer: { type: 'textarea', label: 'Answer' },
      },
    },
  },
  defaultProps: {
    title: 'Frequently asked',
    subtitle: '',
    allowMultiple: false,
    items: [
      {
        question: 'How fast are withdrawals processed?',
        answer:
          'Verified accounts are usually paid out within two hours, and always within one business day.',
      },
      {
        question: 'What are the wagering requirements?',
        answer:
          'Bonus funds carry a 35x wagering requirement, calculated on the bonus amount only.',
      },
      {
        question: 'Can I set a deposit limit?',
        answer:
          'Yes. Daily, weekly and monthly limits can be set at any time under Account, Responsible Play.',
      },
    ],
  },
  render: Accordion,
}
