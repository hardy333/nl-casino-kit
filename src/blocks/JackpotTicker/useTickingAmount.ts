import { useEffect, useState } from 'react'

export function useTickingAmount(start: number, tickAmount: number, tickMs: number) {
  const [amount, setAmount] = useState(start)

  useEffect(() => setAmount(start), [start])

  useEffect(() => {
    const timer = window.setInterval(
      () => setAmount((value) => value + Math.random() * tickAmount),
      Math.max(200, tickMs),
    )

    return () => window.clearInterval(timer)
  }, [tickAmount, tickMs])

  return amount
}
