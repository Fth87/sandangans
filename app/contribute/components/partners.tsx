'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'EcoFabric', logo: '/contribute/partner/eco-fabric.png' },
    { name: 'GreenThread', logo: '/contribute/partner/purewear-logo.webp' },
    { name: 'SustainStyle', logo: '/contribute/partner/sustainstyle.webp' },
    { name: 'PureWear', logo: '/contribute/partner/greenthreat.png' },
    { name: 'EarthFashion', logo: '/contribute/partner/001_nike-logos-swoosh-black' },
    { name: 'RecycleChic', logo: '/contribute/partner/patagonia.jpeg' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-[#F0EBE4]">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants} className="text-center mb-12">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-brown-900 mb-4">
            Our Sustainable Partners
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brown-600 max-w-xl mx-auto">
            We collaborate with these forward-thinking brands to create a more sustainable fashion ecosystem.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm h-24">
              <Image src={partner.logo || '/placeholder.svg'} alt={partner.name} width={180} height={60} className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
