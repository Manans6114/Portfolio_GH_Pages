// Shared design tokens used by both themes.
const shared = {
  fonts: {
    display: "'Fraunces', Georgia, serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  radii: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    pill: "999px",
  },
  spacing: (n) => `${n * 4}px`,
  maxWidth: "1120px",
  transition: "cubic-bezier(0.22, 1, 0.36, 1)",
}

export const darkTheme = {
  ...shared,
  name: "dark",
  colors: {
    bg: "#0b0c0f",
    bgElevated: "#111318",
    surface: "rgba(255, 255, 255, 0.04)",
    surfaceStrong: "rgba(255, 255, 255, 0.06)",
    border: "rgba(255, 255, 255, 0.09)",
    borderStrong: "rgba(255, 255, 255, 0.16)",
    text: "#f4f4f5",
    textMuted: "#a1a1aa",
    textFaint: "#6b6b74",
    accent: "#e8a87c",
    accentSoft: "rgba(232, 168, 124, 0.14)",
    accentText: "#0b0c0f",
    glow: "rgba(232, 168, 124, 0.20)",
  },
  shadows: {
    soft: "0 1px 2px rgba(0,0,0,0.3), 0 8px 30px rgba(0,0,0,0.35)",
    lift: "0 20px 60px rgba(0,0,0,0.5)",
  },
  glassBlur: "blur(14px)",
}

export const lightTheme = {
  ...shared,
  name: "light",
  colors: {
    bg: "#f6f4f0",
    bgElevated: "#fffdfa",
    surface: "rgba(255, 255, 255, 0.6)",
    surfaceStrong: "rgba(255, 255, 255, 0.8)",
    border: "rgba(24, 20, 16, 0.10)",
    borderStrong: "rgba(24, 20, 16, 0.18)",
    text: "#1c1a17",
    textMuted: "#5c574f",
    textFaint: "#8a847a",
    accent: "#b5623a",
    accentSoft: "rgba(181, 98, 58, 0.12)",
    accentText: "#fffdfa",
    glow: "rgba(181, 98, 58, 0.16)",
  },
  shadows: {
    soft: "0 1px 2px rgba(28,26,23,0.05), 0 8px 30px rgba(28,26,23,0.08)",
    lift: "0 20px 60px rgba(28,26,23,0.14)",
  },
  glassBlur: "blur(14px)",
}
