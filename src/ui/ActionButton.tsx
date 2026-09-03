import { cn } from '@/lib/cn'
import type { ButtonSize, Cta } from '@/types'

type ActionButtonProps = {
  cta: Cta
  size?: ButtonSize
  onClick?: () => void
}

const VARIANT_CLASS: Record<Cta['variant'], string> = {
  neon: 'bg-brand text-brand-contrast hover:bg-brand-hover',
  gold: 'bg-gold text-gold-contrast hover:bg-gold-hover',
  outline: 'border border-border-strong text-body hover:border-brand hover:text-brand-hover',
  ghost: 'text-muted hover:bg-surface-raised hover:text-body',
}

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
}

export function ActionButton({ cta, size = 'md', onClick }: ActionButtonProps) {
  if (!cta.label) return null

  const className = cn(
    'inline-flex items-center justify-center rounded-pill font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    VARIANT_CLASS[cta.variant],
    SIZE_CLASS[size],
  )

  if (cta.href) {
    return (
      <a className={className} href={cta.href}>
        {cta.label}
      </a>
    )
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {cta.label}
    </button>
  )
}
