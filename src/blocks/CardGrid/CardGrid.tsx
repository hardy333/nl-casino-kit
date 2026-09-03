import { ActionButton } from '@/ui/ActionButton'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import { GradientSurface } from '@/ui/GradientSurface'
import { Pill } from '@/ui/Pill'
import type { CardGridProps } from './types'

const COLUMN_CLASS: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function CardGrid({ title, subtitle, columns, showArtwork, cards }: CardGridProps) {
  return (
    <BlockShell>
      <BlockHeader title={title} subtitle={subtitle} />

      {cards.length === 0 ? (
        <EmptyState title="No cards yet" hint="Add one in the Cards field." />
      ) : (
        <div className={`grid gap-4 ${COLUMN_CLASS[columns] ?? COLUMN_CLASS[3]}`}>
          {cards.map((card, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-block border border-border bg-surface"
            >
              {showArtwork && (
                <GradientSurface gradient={card.gradient} className="rounded-none">
                  <div className="flex h-28 items-center justify-center text-4xl">
                    <span aria-hidden>{card.emoji}</span>
                  </div>
                </GradientSurface>
              )}

              <div className="flex flex-1 flex-col gap-2 p-4">
                {card.badge && <Pill tone={card.badgeTone}>{card.badge}</Pill>}
                <h3 className="text-base font-semibold text-body">{card.title}</h3>
                {card.body && <p className="text-sm leading-relaxed text-muted">{card.body}</p>}
                {card.cta.label && (
                  <div className="mt-auto pt-3">
                    <ActionButton cta={card.cta} size="sm" />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </BlockShell>
  )
}
