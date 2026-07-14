import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { useThemeMode } from "../context/ThemeContext"
import { MoonIcon, SunIcon } from "./Icons"

const ToggleButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
  transition: border-color 0.3s ${({ theme }) => theme.transition},
    color 0.3s ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode()
  const isDark = mode === "dark"

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.88 }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mode}
          initial={{ y: -12, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 12, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.25 }}
          style={{ display: "flex" }}
        >
          {isDark ? <MoonIcon size={19} /> : <SunIcon size={19} />}
        </motion.span>
      </AnimatePresence>
    </ToggleButton>
  )
}
