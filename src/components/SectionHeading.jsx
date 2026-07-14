import styled from "styled-components"
import { motion } from "framer-motion"
import { Eyebrow } from "./primitives"

const Wrap = styled(motion.div)`
  max-width: 620px;
  margin-bottom: 48px;

  h2 {
    font-size: clamp(2rem, 4vw, 2.9rem);
    margin: 18px 0 14px;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.05rem;
  }
`

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <Wrap
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Wrap>
  )
}
