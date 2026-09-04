import { Puck } from '@puckeditor/core'
import { buildEditorConfig } from '@/config'
import { CanvasSurface } from '@/ui/CanvasSurface'
import type { PageData } from '@/types'
import { readPlaygroundData, writePlaygroundData } from '../storage'

const EMPTY: PageData = { root: { props: {} }, content: [] }

export function EditorRoute() {
  const initial = readPlaygroundData() ?? EMPTY

  return (
    <div className="h-screen">
      <Puck
        config={buildEditorConfig()}
        data={initial}
        iframe={{ enabled: false }}
        onChange={writePlaygroundData}
        onPublish={writePlaygroundData}
        overrides={{
          preview: ({ children }) => <CanvasSurface>{children}</CanvasSurface>,
        }}
      />
    </div>
  )
}
