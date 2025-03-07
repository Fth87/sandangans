'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileOptimizedCarousel from './collection-carousel';
import { Product } from '@/app/marketplace/data';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

interface CollectionSectionProps {
  collection: Collection;
  reverse?: boolean;
}

export default function CollectionSection({ collection, reverse = false }: CollectionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={sectionRef} className="container mx-auto px-0 sm:px-4 mb-20 md:mb-32 overflow-hidden">
      <motion.div style={{ opacity, scale }} className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] bg-white w-full max-w-sm mx-auto md:max-w-none"
        >
          <Image src={collection.image || '/placeholder.svg'} alt={collection.title} fill className="object-cover" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col px-4 sm:px-0 ${reverse ? 'md:pr-6 lg:pr-12' : 'md:pl-6 lg:pl-12'}`}
        >
          <h2 className="font-title  text-brown text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">{collection.title}</h2>
          <p className="text-brown-400 text-sm sm:text-base mb-6 md:mb-8">{collection.description}</p>

          {/* Products Carousel */}
          <div className="mb-6 md:mb-8">
            <MobileOptimizedCarousel products={collection.products} />
          </div>

          <Link href={`/marketplace/collections/${collection.id}`} className="group inline-flex items-center gap-2 text-brown hover:text-brown-900 transition-colors text-sm sm:text-base mt-2">
            View Collection
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
