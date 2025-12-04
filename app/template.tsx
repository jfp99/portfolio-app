'use client'

import { motion, useReducedMotion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 1, 1], // easeOut as bezier curve
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1], // easeIn as bezier curve
    },
  },
}

// Reduced motion variants
const reducedPageVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={shouldReduceMotion ? reducedPageVariants : pageVariants}
    >
      {children}
    </motion.div>
  )
}
