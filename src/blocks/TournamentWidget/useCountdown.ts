import { useEffect, useState } from 'react'

export function useCountdown(hours: number) {
  const [remaining, setRemaining] = useState(hours * 3600)

  useEffect(() => {
    setRemaining(hours * 3600)

    const timer = window.setInterval(
      () => setRemaining((value) => (value > 0 ? value - 1 : 0)),
      1000,
    )

    return () => window.clearInterval(timer)
  }, [hours])

  return [
    Math.floor(remaining / 3600),
    Math.floor((remaining % 3600) / 60),
    remaining % 60,
  ].map((part) => String(part).padStart(2, '0'))
}
