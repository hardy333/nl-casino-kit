type TournamentStatProps = {
  label: string
  value: string
  tone: string
}

export function TournamentStat({ label, value, tone }: TournamentStatProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.18em] text-faint uppercase">{label}</p>
      <p className={`mt-1 font-mono text-2xl font-extrabold tabular-nums sm:text-3xl ${tone}`}>
        {value}
      </p>
    </div>
  )
}
