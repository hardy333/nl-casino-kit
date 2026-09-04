import type { ComponentConfig } from '@puckeditor/core'
import { BLOCKS, BLOCK_NAMES } from '@/blocks'
import { CanvasSurface } from '@/ui/CanvasSurface'

// Outside a real <Puck>/<Render> tree, slot fields are just plain arrays in
// defaultProps. Puck normally swaps them for a render function; stand one in
// so a block calling <MySlot /> here doesn't crash on "expected a string
// ... but got: array".
function withResolvedSlots(config: ComponentConfig, props: Record<string, unknown>) {
  const fields = config.fields ?? {}

  return Object.fromEntries(
    Object.entries(props).map(([key, value]) =>
      fields[key]?.type === 'slot' ? [key, () => null] : [key, value],
    ),
  )
}

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
        const props = withResolvedSlots(block, block.defaultProps ?? {})

        return (
          <section key={name} className="border-t border-border py-6">
            <div className="mx-auto max-w-6xl px-4">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">
                {name}
              </p>
            </div>
            <Render
              {...props}
              id={`gallery-${name}`}
              puck={{ renderDropZone: () => null, metadata: {}, isEditing: false, dragRef: null }}
            />
          </section>
        )
      })}
    </CanvasSurface>
  )
}
