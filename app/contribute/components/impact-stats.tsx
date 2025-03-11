'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function ImpactStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 12500, label: 'Garments Recycled', suffix: '+' },
    { value: 25000, label: 'kg CO₂ Saved', suffix: '+' },
    { value: 750000, label: 'Liters of Water Conserved', suffix: '+' },
    { value: 98, label: 'Landfill Diversion Rate', suffix: '%' },
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
    <section className="py-24 bg-brown text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brown-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brown-300 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants} className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-white mb-4">
            Our Impact
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brown-200 max-w-xl mx-auto">
            Every garment you send makes a difference. Here's our collective impact so far.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-4xl md:text-5xl font-serif mb-2">{inView ? <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} /> : <span>0{stat.suffix}</span>}</div>
              <p className="text-brown-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
