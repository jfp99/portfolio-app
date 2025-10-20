'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Reduced motion variants - no animations
const reducedContainerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

const reducedItemVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

export function AnimatedHero({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? reducedContainerVariants : containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

export function AnimatedHeroItem({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div variants={shouldReduceMotion ? reducedItemVariants : itemVariants}>
      {children}
    </motion.div>
  )
}
