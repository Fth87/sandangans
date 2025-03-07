import { Star } from 'lucide-react';
// import TrendingCarousel from "@/components/trending-carousel"
import ProductGrid from '@/components/product-grid';
import CategoryFilter from '@/components/category-filter';
import { Carousel } from './carousel';
import Image from 'next/image';
import { generateProducts } from '../data';

export default function CollectionsPage() {

  const data = generateProducts(1,4)

  return (
    <main className="min-h-screen w-full overflow-hidden  pb-12">
      {/* Top Trending Section */}
      <section className="container mx-auto px-4 py-12 mb-16 ">
        <div className="relative mb-16">
          <Image src="/images/marketplace/trending/star.svg" alt="Star decoration" width={121} height={86} className="absolute top-2 left-80" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-brown leading-tight">
            TOP
            <br />
            TRENDING
            <br />
            PRODUCTS
          </h1>
        </div>
        <div className="relative">
          <Carousel slides={data} />
        </div>
      </section>

      {/* Other Trending Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">OTHER TRENDING PRODUCTS</h2>

        <CategoryFilter categories={['All', 'Shirts', 'T-Shirts', 'Pants', 'Outers', 'Jackets', 'Shoes', 'Accessories']} />

        <ProductGrid />
      </section>
    </main>
  );
}
