'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-black to-blue-900 h-96 flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to ShopKaro</h1>
        <p className="text-xl">Discover amazing products at unbeatable prices</p>
      </div>
    </motion.div>
  )
}