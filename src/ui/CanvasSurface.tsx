import type { ReactNode } from 'react'

type CanvasSurfaceProps = {
  children: ReactNode
}

export function CanvasSurface({ children }: CanvasSurfaceProps) {
  return (
    <div className="min-h-full bg-canvas font-sans text-body antialiased">
      {children}
    </div>
  )
}
