import { motion } from "framer-motion"

const variants = {
  initial: { opacity: 0, y: 16 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

// Wraps each routed page so navigation fades/slides smoothly.
export function PageTransition({ children }) {
  return (
    <motion.main variants={variants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.main>
  )
}
