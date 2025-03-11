'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingCart, ArrowUpRight } from 'lucide-react';
import ProductCard from '@/components/product-card';
import LIST_PRODUCT from "@/data/products.json";
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation'
import { generateProducts, Product } from '../../data';

export default function ProductDetail() {
  const {slug} = useParams<{ slug: string }>()
  const product = useMemo(() => LIST_PRODUCT.find((item) => item.slug === slug) as Product, [slug])
  const collectionProducts = useMemo(() => LIST_PRODUCT.filter((item) => item.collection === product.collection).splice(0, 3) as Product[], [product])
  
  return (
    <main className="min-h-screen pb-12">
      {/* Product Detail Section */}
      <div className="container overflow-hidden mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="relative">
            <div className="relative h-[300px] sm:h-[400px] aspect-auto md:aspect-[3/4] md:h-auto bg-white">
              <Image src={product.image} alt={product.slug} fill className="object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl font-title text-brown-900 mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg md:text-xl lg:text-2xl font-medium text-brown-900">Rp {product.price.toLocaleString('id-ID')}</span>
              <span className="text-sm lg:text-xl px-2 text-brown-50 line-through bg-brown">{product.originalPrice.toLocaleString('id-ID')}</span>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                  <button
                    key={size}
                    className="min-w-[3rem] h-10 flex items-center justify-center border border-brown-300 hover:border-brown-900 focus:border-brown-900 focus:outline-none transition-colors text-brown-300 hover:text-brown-900 focus:text-brown-900 focus:text-bold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-brown-900 text-xl md:text-2xl">Description</h3>
              <p className="mb-2 text-brown-900 text-lg md:text-xl">
                {product.description}
              </p>
              {/* <button className="text-brown-300 hover:text-brown flex items-center gap-1">
                Read More
                <ChevronRight className="h-4 w-4 rotate-90" />
              </button> */}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 bg-brown text-white h-12 flex items-center justify-center hover:bg-brown-900 transition-colors">Buy Now</button>
              <button className="w-12 h-12 border border-brown flex items-center justify-center hover:border-brown-900 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other From This Collection */}
      {product.collection && <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl  mb-6 text-title">Other From This Collection</h2>
        <div className="justify-between items-center flex md:flex-row flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full lg:w-auto">
            {collectionProducts.map((collectionProduct) => (
              <ProductCard key={collectionProduct.slug} product={collectionProduct} />
            ))}
          </div>
          <Link href={`/marketplace/collections/${product.collection}`} className="group flex items-center shrink-0   justify-center w-32 h-32 rounded-full border border-brown-300 hover:border-brown-900 transition-colors">
            <div className="text-center text-brown-300 group-hover:text-brown-900 transition-colors">
              <span className="block mb-2">See Others</span>
              <ArrowUpRight className="h-5 w-5 mx-auto" />
            </div>
          </Link>
        </div>
      </section>}

      {/* Recommendations */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-serif mb-6">Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generateProducts(3,11).map((recomendationProduct) => (
            <ProductCard key={recomendationProduct.slug} product={recomendationProduct} />
          ))}
        </div>
      </section>
    </main>
  );
}
