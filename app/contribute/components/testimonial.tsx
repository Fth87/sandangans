"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I was skeptical at first, but the process was so easy. I sent in clothes I hadn't worn in years and got vouchers to buy sustainable pieces I actually love!",
      author: "Sarah J.",
      location: "Jakarta",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As someone who cares deeply about sustainability, finding Sandhangans was a game-changer. Now my old clothes have purpose instead of cluttering my closet.",
      author: "Budi K.",
      location: "Surabaya",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The rewards are generous, and I love knowing exactly how my donations are helping the environment. It's a win-win for everyone.",
      author: "Anisa R.",
      location: "Bandung",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 bg-[#F5F5F3]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">
            What Our Community Says
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brown-600 max-w-xl mx-auto">
            Join thousands who are already making a difference with their wardrobes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="w-10 h-10 text-brown-200 mb-4" />
                  <p className="text-lg md:text-xl text-brown-800 italic mb-6">"{testimonials[currentIndex].quote}"</p>
                  <div>
                    <p className="font-medium text-brown-900">{testimonials[currentIndex].author}</p>
                    <p className="text-brown-500 text-sm">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center text-brown-900 hover:bg-brown-200 transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-brown-800" : "bg-brown-300"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center text-brown-900 hover:bg-brown-200 transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

