'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-64 flex-shrink-0"
    >
      <Link href={`/products/${product.id}`}>
        <div className="h-64 overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
          <p className="text-blue-400 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  )
}