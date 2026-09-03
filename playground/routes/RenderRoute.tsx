import { Render } from '@puckeditor/core'
import { buildRendererConfig } from '@/config'
import { CanvasSurface } from '@/ui/CanvasSurface'
import { EmptyState } from '@/ui/EmptyState'
import { readPlaygroundData } from '../storage'

export function RenderRoute() {
  const data = readPlaygroundData()

  if (!data || data.content.length === 0) {
    return (
      <CanvasSurface>
        <div className="mx-auto max-w-2xl px-4 py-16">
          <EmptyState
            title="Nothing built yet"
            hint="Add some blocks on the Editor tab, then come back."
          />
        </div>
      </CanvasSurface>
    )
  }

  return (
    <CanvasSurface>
      <Render config={buildRendererConfig()} data={data} />
    </CanvasSurface>
  )
}
