'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/Button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update meta theme-color for mobile browsers based on resolved theme
  useEffect(() => {
    if (!mounted) return

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        resolvedTheme === 'dark' ? '#0f172a' : '#ffffff'
      )
    }
  }, [resolvedTheme, mounted])

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled aria-label="Toggle theme" />
  }

  // Cycle through: light -> dark -> system
  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  // Get appropriate icon
  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-5 w-5 transition-transform duration-300" />
    }
    if (theme === 'dark' || resolvedTheme === 'dark') {
      return <Sun className="h-5 w-5 transition-transform duration-300" />
    }
    return <Moon className="h-5 w-5 transition-transform duration-300" />
  }

  // Get appropriate label
  const getLabel = () => {
    if (theme === 'system') return 'System theme'
    if (theme === 'dark') return 'Dark mode'
    return 'Light mode'
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={`Current: ${getLabel()}. Click to cycle theme.`}
      title={getLabel()}
      className="transition-all duration-300 hover:scale-110 hover:bg-purple/10 hover:text-purple"
    >
      {getIcon()}
    </Button>
  )
}
