'use client';

import NumberAnimation from './components/number';
import ParallaxSection from './components/parallax-image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WasteRecycle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div ref={ref}>
      <div className="h-auto md:h-[340px] object-cover overflow-hidden">
        <ParallaxSection image="/images/hero/waste-recycle.jpg" alt="Waste Recycle Background" speed={0.2} style={{ height: '100%', minHeight: '340px', boxSizing: 'border-box' }} imgClassName="object-cover h-[80vh]">
          <div className="w-full h-auto min-h-[340px] px-4 md:px-20 py-8 shadow-[inset_0px_0px_60px_0px_rgba(0,0,0,1.00)] flex-col justify-start items-center gap-8 inline-flex overflow-hidden">
            <motion.div className="flex-col justify-start items-center flex" variants={contentVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="text-brown-50 text-xl md:text-2xl font-normal font-sans text-center">Waste recycled since 2025</div>
              <div className="text-brown-50 text-4xl md:text-6xl font-bold font-sans">
                <NumberAnimation duration={3000} value={212767334} theme="minimal" fontSize="clamp(2rem, 5vw, 3.75rem)" />
              </div>
            </motion.div>

            <motion.div className="self-stretch flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0" variants={contentVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: 0.2 }}>
              <div className="flex-col justify-center md:items-start lg:items-center gap-4 flex">
                <div className="w-full md:w-[370px] text-brown-50 text-2xl md:text-4xl font-bold font-title text-center md:text-left">Recycle Your Style, Save the Planet</div>
                <motion.div className="px-5 py-2 bg-brown-50 flex-col  justify-start items-center  gap-2.5 flex overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="text-brown text-base font-normal font-sans text-center ">Join Our Movement</div>
                </motion.div>
              </div>
              <div className="w-full md:w-[295px] text-center md:text-right text-brown-50 text-lg md:text-xl font-light font-['Lato']">
                Get your special voucher by send your pre-loved fashion items. Let your waste become part of our eco-friendly collections.
              </div>
            </motion.div>
          </div>
        </ParallaxSection>
      </div>
    </div>
  );
}
