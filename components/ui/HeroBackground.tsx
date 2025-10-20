'use client'

import { motion } from 'framer-motion'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple/10" />

      {/* Light mode accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-purple/5 dark:opacity-0" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-purple) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-10 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--color-purple-light) 0%, transparent 70%)',
          filter: 'blur(50px)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-1/4 w-32 h-32 rounded-2xl opacity-10 border border-purple"
        style={{
          background: 'linear-gradient(135deg, var(--color-purple) 0%, transparent 100%)',
          backdropFilter: 'blur(2px)',
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full opacity-10 border border-primary"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)',
          backdropFilter: 'blur(2px)',
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-20 h-20 rounded-lg opacity-10 border border-purple-light"
        style={{
          background: 'linear-gradient(135deg, var(--color-purple-light) 0%, transparent 100%)',
        }}
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, var(--color-background) 100%)',
        }}
      />

      {/* Light Rays */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-purple), transparent)',
        }}
        animate={{
          x: [-100, 100],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-0 left-1/3 w-px h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-primary), transparent)',
        }}
        animate={{
          x: [100, -100],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-20"
          style={{
            background: i % 2 === 0 ? 'var(--color-purple)' : 'var(--color-primary)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
