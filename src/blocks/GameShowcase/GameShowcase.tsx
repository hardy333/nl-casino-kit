import { useMemo, useState } from 'react'
import { cn } from '@/lib/cn'
import { BlockShell } from '@/ui/BlockShell'
import { EmptyState } from '@/ui/EmptyState'
import { ShowcaseCard } from './ShowcaseCard'
import { useTabIndicator } from './useTabIndicator'
import type { GameShowcaseProps } from './types'

const COLUMN_CLASS: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
}

const ALL = '__all__'

export function GameShowcase({
  title,
  subtitle,
  allLabel,
  columns,
  showCounts,
  games,
}: GameShowcaseProps) {
  const [active, setActive] = useState(ALL)
  const { listRef, indicator } = useTabIndicator(active)

  const tabs = useMemo(() => {
    const counts = new Map<string, number>()

    for (const game of games) {
      const key = game.category.trim()
      if (!key) continue
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }

    return [
      { key: ALL, label: allLabel || 'All games', count: games.length },
      ...[...counts].map(([key, count]) => ({ key, label: key, count })),
    ]
  }, [games, allLabel])

  const visible = active === ALL ? games : games.filter((game) => game.category === active)

  return (
    <BlockShell>
      <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-body sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-prose text-base text-muted">{subtitle}</p>}

      {games.length === 0 ? (
        <div className="mt-6">
          <EmptyState title="No games yet" hint="Add one in the Games field." />
        </div>
      ) : (
        <>
          <div
            ref={listRef}
            role="tablist"
            aria-label={title}
            className="relative mt-6 flex flex-wrap gap-2.5"
          >
            {indicator && (
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 bottom-0 rounded-pill bg-brand shadow-tile transition-[left,width] duration-300 ease-out-expo motion-reduce:transition-none"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}

            {tabs.map((tab) => {
              const isActive = active === tab.key

              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  data-active={isActive}
                  aria-selected={isActive}
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    'relative z-10 flex cursor-pointer items-center gap-2.5 rounded-pill px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ease-out-quart select-none',
                    isActive
                      ? 'text-brand-contrast'
                      : 'bg-surface text-muted ring-1 ring-inset ring-border hover:text-body',
                  )}
                >
                  {tab.label}
                  {showCounts && (
                    <span
                      className={cn(
                        'grid min-w-6 place-items-center rounded-pill px-1.5 py-0.5 text-[11px] tabular-nums transition-colors duration-300',
                        isActive ? 'bg-black/20' : 'bg-surface-raised',
                      )}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {visible.length === 0 ? (
            <div className="mt-6">
              <EmptyState title="Nothing in this category" hint="Pick another tab." />
            </div>
          ) : (
            <div
              key={active}
              className={cn('mt-6 grid gap-4', COLUMN_CLASS[columns] ?? COLUMN_CLASS[4])}
            >
              {visible.map((game, index) => (
                <div
                  key={`${active}-${index}`}
                  className="animate-showcase-in"
                  style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
                >
                  <ShowcaseCard game={game} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </BlockShell>
  )
}
