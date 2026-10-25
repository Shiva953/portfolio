'use client'

import { useEffect } from 'react'

// Section entrances: every [data-reveal] element on the page rises in once as it reaches the
// screen, delayed by its --d index. Content is only hidden when this script can run (see the
// `js` class set in layout.tsx), so it never stays invisible.
export function RevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
