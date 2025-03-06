import { Star } from "lucide-react"
import TrendingCarousel from "@/components/trending-carousel"
import ProductGrid from "@/components/product-grid"
import CategoryFilter from "@/components/category-filter"

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f3f0] pb-12">
      {/* Top Trending Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          {/* Decorative Stars */}
          <div className="absolute -top-8 right-1/4">
            <Star className="h-16 w-16 text-gray-200 rotate-12" strokeWidth={1} />
          </div>
          <div className="absolute -top-4 right-1/3">
            <Star className="h-8 w-8 text-gray-200 -rotate-12" strokeWidth={1} />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            TOP
            <br />
            TRENDING
            <br />
            PRODUCTS
          </h1>
        </div>

        <TrendingCarousel />
      </section>

      {/* Other Trending Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">OTHER TRENDING PRODUCTS</h2>

        <CategoryFilter
          categories={["All", "Shirts", "T-Shirts", "Pants", "Outers", "Jackets", "Shoes", "Accessories"]}
        />

        <ProductGrid />

        <div className="flex justify-center mt-12">
          <button className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors">
            <span className="text-lg mb-2">Load More</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  )
}

