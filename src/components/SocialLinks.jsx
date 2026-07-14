import styled from "styled-components"
import { motion } from "framer-motion"
import { socials } from "../data/socials"
import { socialIconMap } from "./Icons"

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

const IconLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: color 0.25s ${({ theme }) => theme.transition},
    border-color 0.25s ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export function SocialLinks() {
  return (
    <Row>
      {socials.map((social) => {
        const Icon = socialIconMap[social.id]
        return (
          <IconLink
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} — ${social.handle}`}
            title={social.label}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
          >
            {Icon ? <Icon size={20} /> : social.label}
          </IconLink>
        )
      })}
    </Row>
  )
}
