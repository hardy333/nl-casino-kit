import { GameCard } from '@/blocks/GameCard'
import { BlockHeader } from '@/ui/BlockHeader'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import type { GameCardGridProps } from './types'

const COLUMN_CLASS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6',
}

export function GameCardGrid({ title, subtitle, columns, cards }: GameCardGridProps) {
  if (cards.length === 0) {
    return (
      <BlockShell>
        <EmptyState title="No games yet" hint="Add one in the Games field." />
      </BlockShell>
    )
  }

  return (
    <BlockShell>
      <BlockHeader title={title} subtitle={subtitle} />

      <div className={`grid gap-4 ${COLUMN_CLASS[columns] ?? COLUMN_CLASS[4]}`}>
        {cards.map((card, index) => (
          <GameCard key={index} {...card} />
        ))}
      </div>
    </BlockShell>
  )
}
