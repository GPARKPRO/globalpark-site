'use client'

import { motion } from 'framer-motion'

export default function AnimatedBanner() {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center mt-20"
      style={{ backgroundImage: "url('/banners/1920.png')" }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/logo.svg"
          alt="GlobalPark Logo"
          className="w-48 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  )
}
