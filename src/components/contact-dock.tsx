'use client'

import { useEffect, useRef } from 'react'
import { contactIcons, linkTarget } from '@/components/contact-links'
import { contacts, site } from '@/lib/site'

// Tile size at rest and under the cursor, and how far the pull of the cursor reaches (px).
const REST = 40
const PEAK = 58
const REACH = 110
// Fraction of the remaining distance a tile covers each frame: lower is floatier.
const EASE = 0.2

// Always-on contact dock. Tiles swell toward the cursor and settle back, like the macOS dock.
export function ContactDock() {
  const tiles = useRef<(HTMLAnchorElement | null)[]>([])
  const sizes = useRef<number[]>([])
  const targets = useRef<number[]>([])
  const frame = useRef(0)

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  // Sizes are written straight to the DOM each frame, so React never re-renders mid-animation.
  const step = () => {
    let moving = false
    tiles.current.forEach((tile, index) => {
      if (!tile) return
      const target = targets.current[index] ?? REST
      const current = sizes.current[index] ?? REST
      const next = Math.abs(target - current) < 0.1 ? target : current + (target - current) * EASE
      if (next !== target) moving = true
      sizes.current[index] = next
      tile.style.width = tile.style.height = `${next}px`
      tile.style.setProperty('--dock-scale', String(next / REST))
    })
    frame.current = moving ? requestAnimationFrame(step) : 0
  }

  const run = () => {
    if (!frame.current) frame.current = requestAnimationFrame(step)
  }

  const handleMove = (event: React.PointerEvent) => {
    if (event.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    targets.current = tiles.current.map((tile) => {
      if (!tile) return REST
      const box = tile.getBoundingClientRect()
      const distance = Math.abs(event.clientX - (box.left + box.width / 2))
      const pull = Math.max(0, 1 - distance / REACH)
      // Cosine falloff: a soft shoulder near the cursor instead of a sharp peak.
      return REST + (PEAK - REST) * (0.5 - 0.5 * Math.cos(Math.PI * pull))
    })
    run()
  }

  const handleLeave = () => {
    targets.current = tiles.current.map(() => REST)
    run()
  }

  return (
    <div className="rise pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-4 [--i:5]">
      <nav
        aria-label="Contact"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="pointer-events-auto flex h-[52px] items-end gap-1.5 rounded-2xl border border-white/10 bg-neutral-950/90 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.7)] backdrop-blur-md"
      >
        {site.openToWork && (
          <>
            <p className="flex h-10 items-center gap-2 whitespace-nowrap pl-2.5 pr-1.5 font-mono text-xs text-white">
              <span className="status-dot" aria-hidden />
              open to work
            </p>
            <span className="mx-0.5 mb-2 h-6 w-px bg-white/10" aria-hidden />
          </>
        )}
        {contacts.map((contact, index) => {
          const Icon = contactIcons[contact.key]
          return (
            <a
              key={contact.key}
              ref={(node) => {
                tiles.current[index] = node
              }}
              href={contact.href}
              {...linkTarget(contact.key)}
              aria-label={contact.label}
              className="group relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-neutral-300 transition-colors duration-200 hover:bg-white/[0.14] hover:text-white"
            >
              <Icon className="h-[18px] w-[18px] scale-[var(--dock-scale,1)]" aria-hidden />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-900 px-2 py-1 font-mono text-[11px] lowercase leading-none text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                {contact.label}
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
