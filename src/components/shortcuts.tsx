'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toggleTheme } from '@/components/theme-toggle'
import { shortcuts } from '@/lib/shortcuts'

// Single-key shortcuts, ignored while typing or with a modifier held.
export function Shortcuts() {
  const router = useRouter()

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return
      const target = event.target as HTMLElement | null
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return

      const key = event.key.toLowerCase()
      if (key === 't') return toggleTheme()
      const match = shortcuts.find((shortcut) => shortcut.key === key)
      if (!match) return
      const id = match.href.split('#')[1]
      const section = document.getElementById(id)
      if (section) section.scrollIntoView()
      else router.push(match.href)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [router])

  return null
}
