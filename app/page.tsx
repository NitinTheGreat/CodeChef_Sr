import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryHighlights from '@/components/CategoryHighlights'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <FeaturedProducts />
      <CategoryHighlights />
    </main>
  )
}