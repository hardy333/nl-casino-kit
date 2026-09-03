export type JackpotVariant = 'bar' | 'card'

export type JackpotTickerProps = {
  label: string
  startAmount: number
  currency: string
  tickAmount: number
  tickMs: number
  variant: JackpotVariant
}
