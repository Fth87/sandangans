'use client';

import { delay, motion } from 'framer-motion';
import Image from 'next/image';

const factoryImages = [
  '/images/about/factory-workshop-interior-machines-glass-production-background.jpg', // Left image
  '/images/about/factory-workshop-interior-machines-glass-production-background.jpg', // center image
  '/images/about/factory-workshop-interior-machines-glass-production-background.jpg', // Right image
];

export default function SustainabilityMetrics() {
  return (
    <section className=" py-24 md:py-20 w-screen overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className=" px-4 mb-24 md:mb-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-brown mb-6">
              Our Story: Where Style
              <br />
              Meets Sustainability
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-brown-600 text-lg md:text-xl">
              Fashion That Cares—For You, For the Planet, For
              <br />
              the Future
            </motion.p>
          </div>
        </div>

        {/* Factory Images Section */}
        <div className=" px-4 mb-24 md:mb-6">
          <div className="relative max-w-6xl mx-auto">
            {/* Left Stat Card */}
            <motion.div initial={{ opacity: 0, x: -20, y: 50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="absolute left-0 -top-[15%] md:top-[10%]  lg:top-1/4 z-10 max-w-[280px]">
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg">
                <h3 className="font-title text-xl sm:text-2xl md:text-3xl mb-2 ">18,000+ Kg</h3>
                <p className="text-brown-600 text-sm">of CO2 emissions avoided through energy-efficient production</p>
              </div>
            </motion.div>

            {/* Factory Images */}
            <div className="flex justify-center items-center gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative min-w-36 w-1/4 aspect-[1/2]">
                <Image src={factoryImages[0]} alt="Factory interior view 1" fill className="object-cover object-left " />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative w-1/4 aspect-[1/2] min-w-36">
                <Image src={factoryImages[1]} alt="Factory interior view 2" fill className="object-cover object-center mt-14" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative w-1/4 aspect-[1/2] mt-8 min-w-36">
                <Image src={factoryImages[2]} alt="Factory interior view 3" fill className="object-cover object-right" />
              </motion.div>
            </div>

            {/* Right Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute right-0 top-[60%] sm:-right-[5%] lg:right-0 lg:top-1/4 z-10 max-w-[280px]"
            >
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg">
                <h3 className="font-title text-2xl md:text-3xl mb-2">1,200+ Kg</h3>
                <p className="text-brown-600 text-sm text-right">of fabric waste saved from landfills.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
