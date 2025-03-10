'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Leaf, Recycle, Droplet } from 'lucide-react';
import Link from 'next/link';

export default function Sustainability() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const practices = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Processing',
      description: 'We use low-impact, water-saving techniques to process all garments.',
    },
    {
      icon: Recycle,
      title: 'Zero Waste Commitment',
      description: 'Every component of clothing is repurposed, recycled, or biodegraded.',
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      description: 'Our facilities use 80% less water than conventional recycling processes.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-white  ">
      <div className="container mx-auto  overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants} className="order-2 md:order-1">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brown mb-6">
              Our Sustainability Commitment
            </motion.h2>

            <motion.p variants={itemVariants} className="text-brown-400 mb-8">
              We believe in a circular fashion economy where nothing goes to waste and every garment finds its highest and best use.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6">
              {practices.map((practice, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-brown-100 p-3 rounded-full">
                    <practice.icon className="w-6 h-6 text-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-brown mb-2">{practice.title}</h3>
                    <p className="text-brown-400">{practice.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <Link href={'/aboutus'} className="">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-brown w-fit text-white px-8 py-3 rounded-md hover:bg-brown-800 transition-colors">
                  Learn More About Our Process
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-1 md:order-2">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/contribute/baju.jpg" alt="Sustainable clothing processing" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
