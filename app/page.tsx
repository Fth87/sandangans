'use client';

import Hero from './landing/hero';
import WasteRecycle from './landing/waste-recycle';
import Collection from './landing/collection';

import { motion } from 'framer-motion';
import Navbar from './layouts/navbar/home-navbar';
import Footer from './layouts/footer/home-footer';

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
    <>
      <Navbar />
      <motion.div initial="hidden" animate="visible" variants={pageVariants} className="overflow-x-hidden">
        <Hero />
        <WasteRecycle />
        <Collection />
      </motion.div>
      <Footer />
    </>
  );
}

export default Page;
