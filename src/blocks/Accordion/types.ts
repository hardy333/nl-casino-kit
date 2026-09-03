export type AccordionItem = {
  question: string
  answer: string
}

export type AccordionProps = {
  title: string
  subtitle: string
  allowMultiple: boolean
  items: AccordionItem[]
}
