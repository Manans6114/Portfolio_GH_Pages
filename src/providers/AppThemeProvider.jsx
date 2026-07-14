import { ThemeProvider } from "styled-components"
import { ThemeModeProvider, useThemeMode } from "../context/ThemeContext"
import { darkTheme, lightTheme } from "../styles/theme"
import { GlobalStyles } from "../styles/GlobalStyles"

// Reads the current mode from our Context API and feeds the matching
// token set into styled-components' ThemeProvider.
function StyledThemeBridge({ children }) {
  const { mode } = useThemeMode()
  const theme = mode === "dark" ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export function AppThemeProvider({ children }) {
  return (
    <ThemeModeProvider>
      <StyledThemeBridge>{children}</StyledThemeBridge>
    </ThemeModeProvider>
  )
}
