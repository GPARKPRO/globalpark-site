'use client'

import { motion } from 'framer-motion'

export default function AnimatedLogo() {
  return (
    <motion.img
      src="/logo.svg"
      alt="GlobalPark Logo"
      className="w-32 h-auto drop-shadow-xl"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 20,
      }}
    />
  )
}
