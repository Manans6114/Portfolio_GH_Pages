import { createContext, useContext, useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "manan-portfolio-theme"

export const ThemeContext = createContext({
  mode: "dark",
  toggleTheme: () => {},
  setMode: () => {},
})

function getInitialMode() {
  if (typeof window === "undefined") return "dark"
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // localStorage may be unavailable (private mode, etc.)
  }
  // Fall back to the OS preference, defaulting to dark.
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches
  return prefersLight ? "light" : "dark"
}

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      // ignore write failures
    }
    document.documentElement.style.colorScheme = mode
  }, [mode])

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleTheme: () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [mode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider")
  }
  return ctx
}
