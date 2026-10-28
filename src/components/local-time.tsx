'use client'

import { useEffect, useState } from 'react'

const format = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Kolkata',
})

// Shiva's local time, so someone in another time zone knows when a reply is likely.
// Rendered on the client only; the server sends a placeholder so hydration matches.
export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string>()

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()).toLowerCase())
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className={className} title="Local time in India">
      {time ?? '--:--'} ist
    </span>
  )
}
