'use client';

import Hero from './landing/hero';
import WasteRecycle from './landing/waste-recycle';
import Collection from './landing/collection';

import { motion } from 'framer-motion';

function Page() {
  // Fade in animation for the entire page
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants} className="overflow-x-hidden">
      <Hero />
      <WasteRecycle />
      <Collection />
    </motion.div>
  );
}

export default Page;
