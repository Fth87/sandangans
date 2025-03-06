'use client';
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const heroItems = [
  {
    title: 'NEW COLLECTION',
    subtitle: 'Timeless Denim',
    description: 'Discover our latest denim collection, crafted for style and comfort.',
    buttonText: 'Shop Now',
    image1: '/images/marketplace/sewing-denim-jacket-buttons.png',
    image2: '/images/marketplace/young-teenage-boy-wearing-denim-outfit-1.png',
  },
  {
    title: 'SUMMER ESSENTIALS',
    subtitle: 'Lightweight Comfort',
    description: 'Stay cool with our breathable fabrics designed for hot days.',
    buttonText: 'Explore',
    image1: '/images/marketplace/sewing-denim-jacket-buttons.png',
    image2: '/images/marketplace/young-teenage-boy-wearing-denim-outfit-1.png',
  },
  {
    title: 'AUTUMN STYLES',
    subtitle: 'Warm & Cozy',
    description: 'Prepare for the season with our latest autumn collection.',
    buttonText: 'Discover',
    image1: '/images/marketplace/sewing-denim-jacket-buttons.png',
    image2: '/images/marketplace/young-teenage-boy-wearing-denim-outfit-1.png',
  },
];

const HeroItem = ({ item }: { item: (typeof heroItems)[0] }) => {
  return (
    <div className={`w-full  `}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center py-12 px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.1 }} className="order-2 md:order-1">
          <h1 className="font-title text-4xl text-brown md:text-5xl lg:text-5xl mb-3">{item.title}</h1>
          <p className="text-brown mb-1 text-lg">{item.subtitle}</p>
          <p className="text-brown mb-8 max-w-md text-lg">{item.description}</p>

          <Button className="z-[999] rounded-none hover:cursor-pointer flex items-center gap-2 bg-brown-100  hover:bg-brown-200 text-brown transition-colors py-3 px-6 text-sm font-title">
            {item.buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="14" viewBox="0 0 50 14" fill="none">
              <path d="M1 7H48.5M48.5 7L42.5 1M48.5 7L42.5 13" stroke="#402B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="order-1 md:order-2 relative">
          <div className="flex gap-4 overflow-hidden">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image src={item.image1 || '/placeholder.svg'} alt="Collection image" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image src={item.image2 || '/placeholder.svg'} alt="Collection image" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function HeroCarousel() {
  const carouselItems = heroItems.map((item, index) => <HeroItem key={index} item={item} />);

  return <Carousel items={carouselItems} className="h-[600px] md:h-auto" autoplay={true} interval={6000} />;
}
