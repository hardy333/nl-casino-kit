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
        <div className={`grid gap-5 ${COLUMN_CLASS[columns] ?? COLUMN_CLASS[3]}`}>
          {cards.map((card, index) => (
            <article
              key={index}
              className="group flex flex-col overflow-hidden rounded-block bg-surface shadow-tile ring-1 ring-inset ring-border transition duration-300 ease-out-quart hover:-translate-y-1 hover:shadow-lifted hover:ring-border-strong"
            >
              {showArtwork && (
                <GradientSurface
                  gradient={card.gradient}
                  className="rounded-none shadow-none ring-0"
                >
                  <div className="flex h-32 items-center justify-center text-5xl transition-transform duration-500 ease-out-quart group-hover:scale-110">
                    <span className="drop-shadow-lg" aria-hidden>
                      {card.emoji}
                    </span>
                  </div>
                </GradientSurface>
              )}

              <div className="flex flex-1 flex-col gap-2.5 p-5">
                {card.badge && (
                  <div>
                    <Pill tone={card.badgeTone}>{card.badge}</Pill>
                  </div>
                )}
                <h3 className="text-lg font-bold tracking-tight text-body">{card.title}</h3>
                {card.body && (
                  <p className="text-sm leading-relaxed text-pretty text-muted">{card.body}</p>
                )}
                {card.cta.label && (
                  <div className="mt-auto pt-4">
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
