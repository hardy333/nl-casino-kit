export function money(amount: number, currency: string) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  })
}

export function compact(value: number) {
  return value.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: 1 })
}
