'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from "./ProductCard"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <motion.div
        className="flex overflow-x-auto space-x-6 pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </section>
  )
}