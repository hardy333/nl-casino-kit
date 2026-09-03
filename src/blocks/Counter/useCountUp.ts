import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, durationMs: number) {
  const [value, setValue] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / Math.max(1, durationMs))
      setValue(target * (1 - Math.pow(1 - progress, 3)))
      if (progress < 1) frame.current = requestAnimationFrame(step)
    }

    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [target, durationMs])

  return value
}
