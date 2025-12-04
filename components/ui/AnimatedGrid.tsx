'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
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

interface AnimatedGridProps {
  children: ReactNode
  className?: string
}

export function AnimatedGrid({ children, className }: AnimatedGridProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? reducedContainerVariants : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedGridItem({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div variants={shouldReduceMotion ? reducedItemVariants : itemVariants}>
      {children}
    </motion.div>
  )
}
