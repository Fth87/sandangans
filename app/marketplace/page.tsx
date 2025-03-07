import ProductGrid from '@/components/product-grid';
import FilterSidebar from '@/components/filter-sidebar';
import CategoryFilter from '@/components/category-filter';
import HeroCarousel from '@/components/hero-carousel';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroCarousel />

      <section className="px-4 md:px-8 lg:px-12 py-8">
        <h2 className="text-3xl md:text-4xl font-title text-brown mb-6">PRODUCTS</h2>

        <CategoryFilter categories={['New', 'Shirts', 'T-Shirts', 'Pants', 'Outers', 'Jackets', 'Shoes', 'Accessories']} />

        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar />
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </section>
    </main>
  );
}
