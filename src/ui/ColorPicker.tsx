import { useEffect, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import './color-picker.css'

type ColorPickerProps = {
  value: string
  onChange: (value: string) => void
}

const SWATCHES = [
  '#16a34a',
  '#0f766e',
  '#22d3ee',
  '#2563eb',
  '#7c3aed',
  '#ec4899',
  '#f43f5e',
  '#f97316',
  '#f5b23a',
  '#78350f',
  '#334155',
  '#0b0f1a',
]

function normalize(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return '#000000'
  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState(value)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  function commit(next: string) {
    setDraft(next)
    onChange(next)
  }

  return (
    <div ref={rootRef} className="nl-color-picker">
      <div className="nl-color-picker__row">
        <button
          type="button"
          aria-label="Pick a colour"
          onClick={() => setIsOpen((open) => !open)}
          className="nl-color-picker__swatch"
          style={{ backgroundColor: normalize(value) }}
        />

        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={() => onChange(normalize(draft))}
          spellCheck={false}
          className="nl-color-picker__input"
        />
      </div>

      {isOpen && (
        <div className="nl-color-picker__popover">
          <HexColorPicker color={normalize(value)} onChange={commit} />

          <div className="nl-color-picker__swatches">
            {SWATCHES.map((swatch) => (
              <button
                key={swatch}
                type="button"
                aria-label={swatch}
                onClick={() => commit(swatch)}
                className="nl-color-picker__preset"
                style={{ backgroundColor: swatch }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
