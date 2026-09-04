import type { Config } from '@puckeditor/core'
import type { ReactNode } from 'react'
import { BLOCKS, CATEGORIES } from '@/blocks'

const root: Config['root'] = {
  render: ({ children }: { children: ReactNode }) => <>{children}</>,
}

export function buildEditorConfig(): Config {
  const categories = Object.fromEntries(
    Object.entries(CATEGORIES).map(([key, category]) => [
      key,
      {
        title: category.title,
        defaultExpanded: category.defaultExpanded,
        components: category.components,
      },
    ]),
  )

  return { components: BLOCKS, categories, root } as Config
}

export function buildRendererConfig(): Config {
  return { components: BLOCKS, root } as Config
}
