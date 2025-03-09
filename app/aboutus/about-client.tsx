'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Recycle, Award, Globe, Users, Factory, Sparkles } from 'lucide-react';
import CountUp from 'react-countup';
import SustainabilityMetrics from '@/components/sustainability-metrics';
import { AnimatedTestimonials } from '@/components/animated-testimonial';
import { Awward } from '@/components/awward';
import { WorldMapDemo } from './map';
import { impactStats, testimonials, timeline } from './const';
import { AccordionFaq } from './accordion';

function StatCard({ stat, inView }: { stat: any; inView: boolean }) {
  const Icon = stat.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-brown/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
      <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-brown/5 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
        <Icon className="h-8 w-8 mb-4 text-brown" />
        <div className=" text-2xl sm:text-3xl lg:text-4xl text-brown-700 font-title mb-2">
          <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} separator="," start={inView ? 0 : undefined} />
        </div>
        <h3 className="font-medium  text-lg text-brown lg:text-xl">{stat.label}</h3>
        <p className="text-sm text-brown">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Refs for intersection observer
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const teamRef = useRef(null);
  const awardsRef = useRef(null);

  // Check if elements are in view
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const awardsInView = useInView(awardsRef, { once: true, margin: '-100px' });

  // Parallax effects
  const heroScale = useTransform(springScrollProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(springScrollProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(springScrollProgress, [0, 0.2], [0, 50]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.main ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-[#f5f3f0] overflow-hidden">
      {/* Hero Section */}
      <SustainabilityMetrics />

      {/* Environmental Impact Section */}
      <section ref={statsRef} className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="font-title text-3xl text-brown md:text-4xl mb-4">Our Environmental Impact</h2>
          <p className="text-brown-400 max-w-2xl mx-auto">Every piece we create contributes to a more sustainable future. Here's how we're making a difference.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={statsInView} />
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-16 md:py-24  relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-title text-brown-700 text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-brown max-w-2xl mx-auto">From our humble beginnings to becoming a leader in sustainable fashion.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-6">
                  <div className={`text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <span className="text-sm text-brown-500">{item.year}</span>
                    <h3 className="font-title text-2xl mb-2">{item.title}</h3>
                    <p className="text-brown-600">{item.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12">
                  <div className="w-4 h-4 bg-brown-900 rounded-full" />
                </div>
                <div className="w-1/2 px-6">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image src={item.image || '/placeholder.svg'} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-16 md:py-24 bg-gradient-to-b from-[#f5f3f0] to-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={awardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-3">
            <h2 className="font-title text-brown-700 text-3xl md:text-4xl mb-4">Awards & Recognition</h2>
            <p className="text-brown-400 max-w-2xl mx-auto">Our commitment to sustainable fashion has been recognized globally.</p>
          </motion.div>
          <Awward />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brown-100 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={awardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-3">
            <h2 className="font-title text-brown-700 text-5xl md:text-6xl mb-4">Voices from Our Community</h2>
          </motion.div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
      <section className="container mx-auto my-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={awardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="text-start mb-3">
          <h1 className="font-title text-brown-700 text-5xl md:text-6xl mb-4">FAQ</h1>
          <p className="text-brown-300 text-lg">Answers to Your Questions About Sustainable Fashion</p>
        </motion.div>
        <div className=" px-4 bg-brown-100">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={awardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-3">
            <AccordionFaq />
          </motion.div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-title text-3xl md:text-4xl mb-2">Ready to Be Part of a Global Revolution?</h2>
              <p className="text-brown mb-8 max-w-xl mx-auto">By choosing recycled materials, ethical practices, and innovative designs, we’re reducing waste, conserving resources, and creating a positive impact</p>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-900 transition-colors inline-flex items-center gap-2">
                Join our movement
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              {/* <WorldMapDemo/> */}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
