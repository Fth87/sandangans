'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { generateProducts, Product } from '@/app/marketplace/data';
import { useProducts } from '@/app/marketplace/hooks/product';

export default function ProductGrid() {
  const { products, isLoading, hasMore, loadMore } = useProducts();
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: (index % 8) * 0.1 }}>
              <Link href={`/marketplace/product/${product.slug}`} className="group  hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={product.image || '/placeholder.svg'} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-brown-400">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-medium group-hover:text-brown-400">Rp {product.price.toLocaleString('id-ID')}</span>
                    <span className="text-sm text-brown-300 line-through group-hover:text-brown-200">Rp {product.originalPrice.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button onClick={loadMore} disabled={isLoading} className=" flex flex-col items-center text-brown hover:text-brown-300 transition-colors disabled:opacity-50">
            <span className="text-lg mb-2">{isLoading ? 'Loading...' : 'Load More'}</span>
            <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" animate={{ y: isLoading ? [0, 5, 0] : 0 }} transition={{ repeat: isLoading ? Number.POSITIVE_INFINITY : 0, duration: 1 }}>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </button>
        </div>
      )}
    </div>
  );
}
