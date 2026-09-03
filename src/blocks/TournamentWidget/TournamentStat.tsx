type TournamentStatProps = {
  label: string
  value: string
  tone: string
}

export function TournamentStat({ label, value, tone }: TournamentStatProps) {
  return (
    <div>
      <p className="text-xs tracking-widest text-muted uppercase">{label}</p>
      <p className={`text-2xl font-extrabold ${tone}`}>{value}</p>
    </div>
  )
}
