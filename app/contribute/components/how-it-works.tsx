"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us What You're Sending",
      description: "Fill out a simple form with details about your pre-loved clothing items.",
    },
    {
      number: "02",
      title: "We'll Handle the Shipping",
      description: "Receive a prepaid shipping label via email. Pack and drop off your items.",
    },
    {
      number: "03",
      title: "We Turn Waste into Worth",
      description: "Our experts evaluate your items and determine their best second life.",
    },
    {
      number: "04",
      title: "Receive Your Rewards",
      description: "Get vouchers based on your contribution to shop sustainable fashion.",
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-24 bg-[#F0EBE4] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brown-300 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brown-300 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brown mb-4">
            How It Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brown-400 max-w-xl mx-auto">
            A simple four-step process to give your clothes a meaningful second life while earning rewards.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-brown-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-brown-900 font-serif text-xl">{step.number}</span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-brown-900 mb-3">{step.title}</h3>
              <p className="text-brown-600 text-sm">{step.description}</p>

              <motion.div
                className="w-full h-0.5 bg-brown-200 mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

