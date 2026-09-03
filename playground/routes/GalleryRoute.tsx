import { BLOCKS, BLOCK_NAMES } from '@/blocks'
import { CanvasSurface } from '@/ui/CanvasSurface'

export function GalleryRoute() {
  return (
    <CanvasSurface>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-bold text-body">Block gallery</h1>
        <p className="mt-1 text-sm text-muted">
          Every registered block at its default props. {BLOCK_NAMES.length} blocks.
        </p>
      </div>

      {BLOCK_NAMES.map((name) => {
        const block = BLOCKS[name]
        const Render = block.render

        return (
          <section key={name} className="border-t border-border py-6">
            <div className="mx-auto max-w-6xl px-4">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">
                {name}
              </p>
            </div>
            <Render {...block.defaultProps} puck={{ renderDropZone: () => null }} />
          </section>
        )
      })}
    </CanvasSurface>
  )
}
