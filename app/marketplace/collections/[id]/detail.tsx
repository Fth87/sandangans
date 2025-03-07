'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, ArrowUpRight, X, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import BackButton from '@/components/back-button';
import ProductGrid from '@/components/product-grid';
import CategoryFilter from '@/components/category-filter';
import FilterSidebar from '@/components/filter-sidebar';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  products: Product[];
}

interface CollectionDetailClientProps {
  collection: Collection;
}

export default function CollectionDetailClient({ collection }: CollectionDetailClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll progress for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = Math.min(scrollTop / totalScrollable, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gallery image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % collection.galleryImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [collection.galleryImages.length]);

  // Parallax effect values
  const heroY = useTransform(
    () => scrollProgress * 100, // Reduced parallax effect
    (value) => `${value}px`
  );

  const heroOpacity = useTransform(
    () => scrollProgress * 2,
    (value) => 1 - Math.min(value, 1)
  );

  const galleryScale = useTransform(
    () => scrollProgress * 0.5,
    (value) => 1 + Math.min(value, 0.1)
  );

  return (
    <motion.main ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen ">
      <div className="fixed top-24 left-4 z-50">
        <BackButton label="" />
      </div>
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-brown-500">
          <Image src={collection.heroImage || ''} alt={collection.title} fill priority sizes="100vw" className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-3xl">
            <motion.span className="block text-sm md:text-base uppercase tracking-widest mb-2 text-brown-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              Sandhangans Collection
            </motion.span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4">{collection.title}</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg md:text-xl mb-6 font-light">{collection.subtitle}</p>
            <p className="text-sm md:text-base max-w-xl mx-auto text-brown-100">{collection.description}</p>
            <Link href={'#galery'}>
              <motion.button className="mt-8 px-8 py-3 bg-white text-black hover:bg-brown-200 transition-colors inline-flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore Collection
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <motion.div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center" animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <motion.section id="galery" ref={galleryRef} className="py-16 md:py-24 container mx-auto px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <motion.h2 className="font-title text-brown text-3xl md:text-4xl lg:text-5xl mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              About the Collection
            </motion.h2>
            <motion.div className="w-16 h-1 bg-brown-900 mb-6" initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />
            <motion.p className="text-brown-600 mb-8 leading-relaxed" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              {collection.longDescription}
            </motion.p>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Link href="#product" className="group inline-flex items-center gap-2 text-[#2b2b2b] hover:text-black transition-colors border-b border-brown-400 pb-1">
                Explore Products
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>

          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence mode="wait">
              {collection.galleryImages.map(
                (image, index) =>
                  index === activeGalleryImage && (
                    <motion.div key={index} className="absolute inset-0 w-full h-full" initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1 }} transition={{ duration: 0.2 }}>
                      <Image
                        fill
                        src={image}
                        alt={`${collection.title} gallery image ${index + 1}`}
                        sizes="(max-width: 768px) 100vw, 50vw "
                        className="object-cover
                      "
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {collection.galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeGalleryImage ? 'bg-white w-4' : 'bg-white/50'}`}
                  onClick={() => setActiveGalleryImage(index)}
                  aria-label={`View gallery image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section id="product" className="px-4 md:px-8 lg:px-12 py-8">
        <h2 className="text-3xl md:text-4xl font-title text-brown mb-6">PRODUCTS</h2>

        <CategoryFilter categories={['New', 'Shirts', 'T-Shirts', 'Pants', 'Outers', 'Jackets', 'Shoes', 'Accessories']} />

        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar />
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section className="py-16 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="font-serif text-2xl md:text-3xl mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Join Our Community
          </motion.h2>
          <motion.p className="text-brown-600 mb-6 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            Subscribe to our newsletter to receive updates on new arrivals, special offers, and styling tips.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-brown-300 focus:outline-none focus:ring-1 focus:ring-brown-400" />
            <motion.button className="px-6 py-3 bg-[#2b2b2b] text-white hover:bg-black transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Back to top button */}
      <AnimatePresence>
        {scrollProgress > 0.2 && (
          <motion.button
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 8L8 1L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
