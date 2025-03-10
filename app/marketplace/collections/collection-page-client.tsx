'use client';

import CollectionSection from '@/components/collection-section';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '../data';
import ParallaxSection from '@/app/landing/components/parallax-image';

export default function CollectionsPageClient() {
  return (
    <main className="min-h-screen  pt-0 pb-0">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="h-full w-full object-cover overflow-hidden ">
          <ParallaxSection
            image="/marketplace/collection2.jpg"
            alt="Deskripsi Gambar"
            imgClassName='brightness-50'
            speed={0.2}
            style={{ height: '500px' }} // Atur tinggi sesuai kebutuhan
          >
            <div className="relative z-10 text-center text-brown-50 px-4 h-[50vh] flex flex-col justify-center items-center">
              <h1 className=" font-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-3 md:mb-4">Collections</h1>
              <p className="text-sm sm:text-base md:text-xl text-brown-50 max-w-2xl mx-auto">Discover our curated collections of sustainable and timeless fashion pieces</p>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Collections */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20">
        {collections.map((collection, index) => (
          <CollectionSection key={collection.id} collection={collection} reverse={index % 2 === 1} />
        ))}
      </div>

      {/* Newsletter Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">Stay Updated</h2>
          <p className="text-brown-600 text-sm sm:text-base mb-6 md:mb-8 max-w-2xl mx-auto">Subscribe to our newsletter to receive updates on new collections, sustainable fashion tips, and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-brown-300 focus:outline-none focus:ring-1 focus:ring-brown-400" />
            <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-brown text-white hover:bg-brown-900 transition-colors flex items-center justify-center gap-2 text-sm">
              Subscribe
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
