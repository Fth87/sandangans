'use client';

import type React from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      console.log('Submitted email:', email);
      setIsSubmitted(true);
      setEmail('');

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

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
    <section className="py-24 bg-brown-50">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants} className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brown-500 mb-4">
            Join Our Movement
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brown-400 mb-8">
            Send us your pre-loved clothes. We'll recycle, upcycle, or resell them responsibly. Earn vouchers and join the circular fashion movement.
          </motion.p>
          <motion.div className="flex justify-center items-center">
            <Link href="/contribute/form" className="">
              <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-brown text-white px-8 py-3 rounded-md flex items-center space-x-2 hover:bg-brown-800 transition-colors">
                <span>Send Your Clothes</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="text-brown-400 text-sm mt-4">
            We respect your privacy and will never share your information.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
