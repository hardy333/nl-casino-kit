import { useState } from 'react'
import { cn } from '@/lib/cn'
import { EditorRoute } from './routes/EditorRoute'
import { GalleryRoute } from './routes/GalleryRoute'
import { RenderRoute } from './routes/RenderRoute'

type RouteName = 'gallery' | 'editor' | 'render'

const ROUTES: { name: RouteName; label: string }[] = [
  { name: 'gallery', label: 'Gallery' },
  { name: 'editor', label: 'Editor' },
  { name: 'render', label: 'Render' },
]

export function App() {
  const [route, setRoute] = useState<RouteName>('gallery')

  return (
    <div className="flex h-screen flex-col bg-canvas">
      <nav className="flex shrink-0 items-center gap-1 border-b border-border bg-surface-sunken px-3 py-2">
        <span className="mr-3 font-mono text-xs font-semibold uppercase tracking-widest text-faint">
          fields-kit
        </span>
        {ROUTES.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setRoute(item.name)}
            className={cn(
              'rounded-pill px-3 py-1 text-sm font-medium transition-colors',
              route === item.name
                ? 'bg-brand text-brand-contrast'
                : 'text-muted hover:bg-surface-raised hover:text-body',
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <main className="min-h-0 flex-1 overflow-auto">
        {route === 'gallery' && <GalleryRoute />}
        {route === 'editor' && <EditorRoute />}
        {route === 'render' && <RenderRoute />}
      </main>
    </div>
  )
}
