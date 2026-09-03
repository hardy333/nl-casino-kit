import type { PageData } from '@/types'

const KEY = 'fields-kit:playground:home'

export function readPlaygroundData(): PageData | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as PageData) : null
  } catch {
    return null
  }
}

export function writePlaygroundData(data: PageData) {
  localStorage.setItem(KEY, JSON.stringify(data))
}
