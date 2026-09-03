import type { Field } from '@puckeditor/core'
import { ColorPicker } from '@/ui/ColorPicker'
import type { Align, ButtonSize, ButtonVariant, Cta, Gradient } from '@/types'

export function booleanField(
  label: string,
  trueLabel = 'Show',
  falseLabel = 'Hide',
): Field<boolean> {
  return {
    type: 'radio',
    label,
    options: [
      { label: trueLabel, value: true },
      { label: falseLabel, value: false },
    ],
  }
}

export function alignField(label = 'Alignment'): Field<Align> {
  return {
    type: 'radio',
    label,
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  }
}

export function columnsField(label = 'Columns', max = 4): Field<number> {
  return {
    type: 'select',
    label,
    options: Array.from({ length: max - 1 }, (_, index) => {
      const value = index + 2
      return { label: `${value}`, value }
    }),
  }
}

export function buttonVariantField(label = 'Style'): Field<ButtonVariant> {
  return {
    type: 'select',
    label,
    options: [
      { label: 'Neon', value: 'neon' },
      { label: 'Gold', value: 'gold' },
      { label: 'Outline', value: 'outline' },
      { label: 'Ghost', value: 'ghost' },
    ],
  }
}

export function buttonSizeField(label = 'Size'): Field<ButtonSize> {
  return {
    type: 'radio',
    label,
    options: [
      { label: 'S', value: 'sm' },
      { label: 'M', value: 'md' },
      { label: 'L', value: 'lg' },
    ],
  }
}

export function colorField(label: string): Field<string> {
  return {
    type: 'custom',
    label,
    render: ({ value, onChange }) => (
      <ColorPicker value={value ?? ''} onChange={onChange} />
    ),
  }
}

export function gradientField(label = 'Gradient'): Field<Gradient> {
  return {
    type: 'object',
    label,
    objectFields: {
      from: colorField('From'),
      to: colorField('To'),
    },
  }
}

export function ctaField(label = 'Button'): Field<Cta> {
  return {
    type: 'object',
    label,
    objectFields: {
      label: { type: 'text', label: 'Label' },
      href: { type: 'text', label: 'Link' },
      variant: buttonVariantField(),
    },
  }
}

export function ctaListField(label = 'Buttons', max = 2): Field<Cta[]> {
  return {
    type: 'array',
    label,
    max,
    arrayFields: {
      label: { type: 'text', label: 'Label' },
      href: { type: 'text', label: 'Link' },
      variant: buttonVariantField(),
    },
    getItemSummary: (item) => item.label || 'Button',
  }
}

export function cta(
  label: string,
  href = '',
  variant: ButtonVariant = 'neon',
): Cta {
  return { label, href, variant }
}

export function gradient(from: string, to: string): Gradient {
  return { from, to }
}
