type EmptyStateProps = {
  title: string
  hint?: string
}

export function EmptyState({ title, hint }: EmptyStateProps) {
  return (
    <div className="rounded-block border border-dashed border-border bg-surface/40 px-6 py-14 text-center">
      <p className="text-base font-semibold text-body">{title}</p>
      {hint && <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-faint">{hint}</p>}
    </div>
  )
}
