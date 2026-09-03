import type { ComponentConfig } from '@puckeditor/core'
import { alignField, cta, ctaListField, gradient, gradientField } from '@/blocks/fields'
import { HeroBanner } from './HeroBanner'
import type { HeroBannerProps } from './types'

export const heroBannerConfig: ComponentConfig<HeroBannerProps> = {
  label: 'Hero Banner',
  fields: {
    eyebrow: { type: 'text', label: 'Eyebrow' },
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
    watermark: { type: 'text', label: 'Watermark emoji' },
    align: alignField(),
    height: {
      type: 'radio',
      label: 'Height',
      options: [
        { label: 'S', value: 'sm' },
        { label: 'M', value: 'md' },
        { label: 'L', value: 'lg' },
      ],
    },
    gradient: gradientField(),
    ctas: ctaListField('Buttons', 2),
  },
  defaultProps: {
    eyebrow: 'Welcome bonus',
    title: 'Get 100% up to €500',
    subtitle: 'Plus 200 free spins on your first deposit.',
    watermark: '🎰',
    align: 'left',
    height: 'md',
    gradient: gradient('#16a34a', '#0f766e'),
    ctas: [cta('Claim bonus', '', 'gold'), cta('Terms', '', 'ghost')],
  },
  render: HeroBanner,
}
