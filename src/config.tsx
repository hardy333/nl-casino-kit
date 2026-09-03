import type { Config } from '@puckeditor/core'
import type { ReactNode } from 'react'
import { BLOCKS, CATEGORIES } from '@/blocks'
import { PAGES, type PageId } from '@/types'

const root: Config['root'] = {
  render: ({ children }: { children: ReactNode }) => <>{children}</>,
}

export function buildEditorConfig(pageId: PageId): Config {
  const allowed = PAGES[pageId].allowed

  const components = Object.fromEntries(
    allowed.map((name) => [name, BLOCKS[name]]),
  )

  const categories = Object.fromEntries(
    Object.entries(CATEGORIES)
      .map(([key, category]) => [
        key,
        {
          title: category.title,
          components: category.components.filter((name) => allowed.includes(name)),
        },
      ])
      .filter(([, category]) => (category as { components: string[] }).components.length > 0),
  )

  return { components, categories, root } as Config
}

export function buildRendererConfig(): Config {
  return { components: BLOCKS, root } as Config
}
