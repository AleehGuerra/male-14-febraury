"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full bg-card/50 backdrop-blur-sm border-primary/20">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-300"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-foreground transition-transform duration-300" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-transform duration-300" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}
