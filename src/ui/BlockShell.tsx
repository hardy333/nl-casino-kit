import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BlockShellProps = {
  children: ReactNode
  className?: string
}

export function BlockShell({ children, className }: BlockShellProps) {
  return (
    <section className={cn('mx-auto w-full max-w-6xl px-4 py-6 sm:px-6', className)}>
      {children}
    </section>
  )
}
