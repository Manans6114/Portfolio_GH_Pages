import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`

export const Section = styled.section`
  padding: ${({ $tight }) => ($tight ? "48px 0" : "96px 0")};

  @media (max-width: 768px) {
    padding: ${({ $tight }) => ($tight ? "40px 0" : "64px 0")};
  }
`

export const GlassCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: ${({ $pad }) => $pad || "28px"};
  position: relative;
  overflow: hidden;
  transition: border-color 0.35s ${({ theme }) => theme.transition},
    transform 0.35s ${({ theme }) => theme.transition},
    box-shadow 0.35s ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 5px 12px;
  white-space: nowrap;
`

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.accent};

  &::before {
    content: "";
    width: 26px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;
  }
`

export const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 15px;
  padding: 13px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: transform 0.25s ${({ theme }) => theme.transition},
    background 0.25s ${({ theme }) => theme.transition},
    border-color 0.25s ${({ theme }) => theme.transition};

  background: ${({ theme, $variant }) =>
    $variant === "ghost" ? "transparent" : theme.colors.accent};
  color: ${({ theme, $variant }) =>
    $variant === "ghost" ? theme.colors.text : theme.colors.accentText};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "ghost" ? theme.colors.borderStrong : theme.colors.accent};

  &:hover {
    background: ${({ theme, $variant }) =>
      $variant === "ghost" ? theme.colors.surfaceStrong : theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
