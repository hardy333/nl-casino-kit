import { useCallback, useEffect, useRef, useState } from 'react'

type Indicator = { left: number; width: number }

/** Tracks the active tab's box so an indicator can slide between pills. */
export function useTabIndicator(activeKey: string) {
  const listRef = useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = useState<Indicator | null>(null)

  const measure = useCallback(() => {
    const list = listRef.current
    if (!list) return

    const active = list.querySelector<HTMLElement>('[data-active="true"]')
    if (!active) return

    setIndicator({ left: active.offsetLeft, width: active.offsetWidth })
  }, [])

  useEffect(() => {
    measure()

    const list = listRef.current
    if (!list || typeof ResizeObserver === 'undefined') return

    const observer = new ResizeObserver(measure)
    observer.observe(list)

    return () => observer.disconnect()
  }, [measure, activeKey])

  return { listRef, indicator }
}
