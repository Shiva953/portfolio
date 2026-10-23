'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Toaster } from 'sonner'

type Theme = 'light' | 'dark'

const current = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

// Sun in dark mode, moon in light. Which icon shows is pure CSS, so the server render matches.
export function ThemeToggle() {
  const toggle = () => {
    const next: Theme = current() === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="theme-toggle -mr-2 p-2 text-muted hover:text-fg"
    >
      <span className="relative block h-4 w-4">
        <Sun className="theme-icon theme-icon-sun h-4 w-4" aria-hidden />
        <Moon className="theme-icon theme-icon-moon h-4 w-4" aria-hidden />
      </span>
    </button>
  )
}

// Toasts that follow the page theme.
export function ThemedToaster() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(current())
    const observer = new MutationObserver(() => setTheme(current()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return <Toaster theme={theme} position="top-center" />
}
