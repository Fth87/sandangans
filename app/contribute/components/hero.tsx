'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { BiSolidDiscount } from 'react-icons/bi';
import { FaRecycle } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
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
      transition: { duration: 0.5 },
    },
  };

  const steps = [
    { icon: BsFillBoxSeamFill, title: 'Send', description: 'Fill our form, pack your items, and ship for free.' },
    { icon: BiSolidDiscount, title: 'Earn', description: 'Get vouchers for every item you send.' },
    { icon: FaRecycle, title: 'Repeat', description: 'Support circular fashion. Keep the cycle going!' },
  ];

  return (
    <section className="pt-24 pb-16 px-4 overflow-hidden">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown leading-tight">
            Give Your Old Clothes <br />a Second Life
          </motion.h1>

          <motion.p variants={itemVariants} className="text-brown-300 text-lg max-w-xl">
            Send us your pre-loved clothes. We'll recycle, upcycle, or resell them responsibly. Earn vouchers and join the circular fashion movement.
          </motion.p>

          <Link href="/contribute/form" className="mt-3">
            <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-brown text-white px-8 py-3 rounded-md flex items-center space-x-2 hover:bg-brown-800 transition-colors">
              <span>Send Your Clothes</span>
            </motion.button>
          </Link>

          <motion.div variants={containerVariants} className="grid grid-cols-3 gap-8 pt-8">
            {steps.map((Step, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12  rounded-lg flex items-center justify-center">
                  <Step.icon className="w-12 h-12 text-brown-400" />
                </div>
                <h3 className="font-medium text-brown-900">{Step.title}</h3>
                <p className="text-sm text-brown-600">{Step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative h-[600px] hidden lg:block">
          <Image src="/contribute/contribute.png" alt="Person in beige clothing" width={405} height={726} className="md:w-[300px] lg:w-[400px]" priority />
        </motion.div>
      </motion.div>
    </section>
  );
}
