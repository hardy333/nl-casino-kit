import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/cn'

type CarouselProps = {
  children?: ReactNode
  slidesToShow?: number
  /** Fixed slide width in px. Slides keep this width instead of a fraction of the track. */
  tileWidth?: number
  gap?: boolean
  loop?: boolean
  autoplay?: boolean
  intervalMs?: number
  showArrows?: boolean
  showDots?: boolean
  dotsInside?: boolean
  /** Renders the prev/next controls above the track instead of overlaying it. */
  headerArrows?: boolean
  /** Content placed to the left of header arrows, e.g. a title or a "show all" link. */
  header?: ReactNode
  /** Hides the fade mask on a free-scrolling strip. */
  edgeFade?: boolean
  /** Renders the track yourself, e.g. so a Puck slot can be the flex track. */
  renderTrack?: (props: { className: string; style?: CSSProperties }) => ReactNode
}

const SLIDE_BASIS: Record<number, string> = {
  1: '[&>*]:basis-full',
  2: '[&>*]:basis-full sm:[&>*]:basis-1/2',
  3: '[&>*]:basis-1/2 sm:[&>*]:basis-1/3',
  4: '[&>*]:basis-1/2 sm:[&>*]:basis-1/3 lg:[&>*]:basis-1/4',
  5: '[&>*]:basis-1/2 sm:[&>*]:basis-1/3 lg:[&>*]:basis-1/5',
  6: '[&>*]:basis-1/2 sm:[&>*]:basis-1/4 lg:[&>*]:basis-1/6',
}

export function Carousel({
  children,
  slidesToShow = 1,
  tileWidth,
  gap = true,
  loop = true,
  autoplay = false,
  intervalMs = 5000,
  showArrows = true,
  showDots = true,
  dotsInside = false,
  headerArrows = false,
  header,
  edgeFade = false,
  renderTrack,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: 'start', containScroll: loop ? undefined : 'trimSnaps' },
    autoplay ? [Autoplay({ delay: Math.max(1500, intervalMs), stopOnInteraction: false })] : [],
  )

  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setSnaps(emblaApi.scrollSnapList())
    onSelect()

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const hasControls = snaps.length > 1

  const trackClassName = cn(
    'flex items-stretch *:min-w-0 *:shrink-0 *:grow-0',
    gap && '-ml-3 *:pl-3',
    tileWidth ? '*:basis-(--nl-tile)' : (SLIDE_BASIS[slidesToShow] ?? SLIDE_BASIS[1]),
  )

  const trackStyle = tileWidth
    ? ({ '--nl-tile': `${tileWidth}px` } as CSSProperties)
    : undefined

  const arrows = (
    <>
      <CarouselArrow
        direction="prev"
        floating={!headerArrows}
        onClick={() => emblaApi?.scrollPrev()}
      />
      <CarouselArrow
        direction="next"
        floating={!headerArrows}
        onClick={() => emblaApi?.scrollNext()}
      />
    </>
  )

  return (
    <div className="relative">
      {(header || (headerArrows && showArrows && hasControls)) && (
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="min-w-0">{header}</div>
          {headerArrows && showArrows && hasControls && (
            <div className="flex shrink-0 gap-2">{arrows}</div>
          )}
        </div>
      )}

      <div
        ref={emblaRef}
        className={cn(
          'overflow-hidden',
          edgeFade &&
            '[mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]',
        )}
      >
        {renderTrack ? (
          renderTrack({ className: trackClassName, style: trackStyle })
        ) : (
          <div className={trackClassName} style={trackStyle}>
            {children}
          </div>
        )}
      </div>

      {!headerArrows && showArrows && hasControls && arrows}

      {showDots && hasControls && (
        <div
          className={cn(
            'flex justify-center gap-2',
            dotsInside ? 'absolute inset-x-0 bottom-4' : 'mt-4',
          )}
        >
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'h-1.5 cursor-pointer rounded-pill transition-all duration-300',
                index === selected
                  ? 'w-8 bg-body'
                  : 'w-3 bg-body/40 hover:bg-body/70',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

type CarouselArrowProps = {
  direction: 'prev' | 'next'
  floating: boolean
  onClick: () => void
}

function CarouselArrow({ direction, floating, onClick }: CarouselArrowProps) {
  const isPrev = direction === 'prev'

  return (
    <button
      type="button"
      aria-label={isPrev ? 'Previous' : 'Next'}
      onClick={onClick}
      className={cn(
        'grid size-9 cursor-pointer place-items-center rounded-tile text-body ring-1 ring-inset ring-border transition-colors hover:bg-surface-raised',
        floating
          ? cn(
              'absolute top-1/2 z-10 -translate-y-1/2 rounded-pill bg-surface-sunken/80 backdrop-blur',
              isPrev ? 'left-2' : 'right-2',
            )
          : 'bg-surface',
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="size-5">
        <path
          d={isPrev ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
