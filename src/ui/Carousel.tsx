import { useCallback, useEffect, useState, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/cn'

type CarouselProps = {
  children: ReactNode
  slidesToShow?: number
  gap?: boolean
  loop?: boolean
  autoplay?: boolean
  intervalMs?: number
  showArrows?: boolean
  showDots?: boolean
  dotsInside?: boolean
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
  gap = true,
  loop = true,
  autoplay = false,
  intervalMs = 5000,
  showArrows = true,
  showDots = true,
  dotsInside = false,
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

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className={cn(
            'flex [&>*]:min-w-0 [&>*]:shrink-0 [&>*]:grow-0',
            gap && '-ml-3 [&>*]:pl-3',
            SLIDE_BASIS[slidesToShow] ?? SLIDE_BASIS[1],
          )}
        >
          {children}
        </div>
      </div>

      {showArrows && hasControls && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 left-2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-pill bg-surface-sunken/80 text-body ring-1 ring-inset ring-border backdrop-blur transition-colors hover:bg-surface-raised"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-5">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-pill bg-surface-sunken/80 text-body ring-1 ring-inset ring-border backdrop-blur transition-colors hover:bg-surface-raised"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-5">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

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
