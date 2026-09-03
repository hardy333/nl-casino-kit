type WinTileCardProps = {
  label: string
  amount: string
  currency: string
  emoji: string
  gradientFrom: string
  gradientTo: string
}

export function WinTileCard({
  label,
  amount,
  currency,
  emoji,
  gradientFrom,
  gradientTo,
}: WinTileCardProps) {
  return (
    <figure className="group m-0">
      <div
        className="flex aspect-[3/4] items-end justify-center overflow-hidden rounded-tile p-2 ring-1 ring-inset ring-border/60 transition-transform duration-200 ease-out-quart group-hover:-translate-y-1"
        style={{
          backgroundImage: `linear-gradient(160deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <span className="text-4xl drop-shadow-lg" aria-hidden>
          {emoji}
        </span>
      </div>

      <figcaption className="mt-2 flex items-center justify-center gap-1.5">
        <span className="truncate font-mono text-sm font-bold tabular-nums text-neon">
          {amount}
        </span>
        {currency && (
          <span className="grid size-4 shrink-0 place-items-center rounded-pill bg-gold text-[9px] font-bold text-gold-contrast">
            {currency.slice(0, 1)}
          </span>
        )}
      </figcaption>

      <p className="sr-only">{label}</p>
    </figure>
  )
}
