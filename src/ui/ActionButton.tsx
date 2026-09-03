import { cn } from '@/lib/cn'
import type { ButtonSize, Cta } from '@/types'

type ActionButtonProps = {
  cta: Cta
  size?: ButtonSize
  onClick?: () => void
}

const VARIANT_CLASS: Record<Cta['variant'], string> = {
  neon: 'bg-brand text-brand-contrast shadow-tile hover:bg-brand-hover hover:shadow-lifted',
  gold: 'bg-gold text-gold-contrast shadow-tile hover:bg-gold-hover hover:shadow-lifted',
  outline:
    'text-body ring-1 ring-inset ring-border-strong hover:bg-surface-raised hover:text-brand-hover hover:ring-brand',
  ghost: 'text-muted hover:bg-surface-raised hover:text-body',
}

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export function ActionButton({ cta, size = 'md', onClick }: ActionButtonProps) {
  if (!cta.label) return null

  const className = cn(
    'inline-flex cursor-pointer items-center justify-center rounded-pill font-semibold tracking-tight whitespace-nowrap transition duration-200 ease-out-quart hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
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
