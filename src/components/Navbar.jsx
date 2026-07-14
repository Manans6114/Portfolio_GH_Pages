import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Container } from "./primitives"

const Header = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 14px 0;
  transition: background 0.4s ${({ theme }) => theme.transition},
    border-color 0.4s ${({ theme }) => theme.transition};
  background: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.surface : "transparent"};
  backdrop-filter: ${({ $scrolled, theme }) => ($scrolled ? theme.glassBlur : "none")};
  -webkit-backdrop-filter: ${({ $scrolled, theme }) => ($scrolled ? theme.glassBlur : "none")};
  border-bottom: 1px solid
    ${({ theme, $scrolled }) => ($scrolled ? theme.colors.border : "transparent")};
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: -0.01em;

  span.dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentSoft};
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};

  @media (max-width: 560px) {
    gap: 2px;
    padding: 4px;
  }
`

const Item = styled(NavLink)`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.25s ${({ theme }) => theme.transition};

  &.active {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 560px) {
    padding: 8px 12px;
  }
`

const Pill = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: -1;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Header
      $scrolled={scrolled}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <Bar>
          <Brand to="/" aria-label="Manan Sharma — home">
            <span className="dot" aria-hidden />
            Manan Sharma
          </Brand>

          <Nav aria-label="Primary">
            {links.map((link) => (
              <Item key={link.to} to={link.to} end={link.end}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <Pill
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    {link.label}
                  </>
                )}
              </Item>
            ))}
          </Nav>

          <Right>
            <ThemeToggle />
          </Right>
        </Bar>
      </Container>
    </Header>
  )
}
