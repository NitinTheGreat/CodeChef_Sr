'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export default function SimilarProducts({ id }: { id: string }) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setProducts(data.filter((p: Product) => p.id.toString() !== id)))
  }, [id])

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}