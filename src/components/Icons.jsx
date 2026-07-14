// Lightweight inline SVG icon set. Each icon inherits `currentColor`
// and accepts a `size` prop (defaults to 20).
const base = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
})

export function SunIcon({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function MoonIcon({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function MapPin({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function MailIcon({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22a.55.55 0 0 0 .73-.53v-1.85c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.41-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.08 1.09-2.82-.11-.27-.47-1.35.1-2.81 0 0 .89-.29 2.92 1.08a10 10 0 0 1 5.32 0c2.02-1.37 2.91-1.08 2.91-1.08.58 1.46.21 2.54.11 2.81.68.74 1.09 1.67 1.09 2.82 0 4.03-2.46 4.91-4.8 5.17.38.33.71.97.71 1.96v2.9c0 .29.19.62.74.52A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.02H4.7V24H.24V8.02zM8.34 8.02h4.27v2.18h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V24h-4.46v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.65-2.44 3.36V24H8.34V8.02z" />
    </svg>
  )
}

export function XIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="M18.24 2.25h3.31l-7.23 8.26L22.84 21.75h-6.66l-5.22-6.82-5.97 6.82H1.68l7.73-8.84L1.16 2.25h6.83l4.71 6.23 5.54-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

export const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
}
