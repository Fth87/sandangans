"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      console.log("Submitted email:", email)
      setIsSubmitted(true)
      setEmail("")

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }
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
    <section className="py-24 bg-brown-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">
            Join Our Movement
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brown-600 mb-8">
            Subscribe to our newsletter for sustainable fashion tips, exclusive offers, and updates on our environmental
            impact.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`px-6 py-3 rounded-md flex items-center justify-center transition-colors ${
                isSubmitted ? "bg-green-600 text-white" : "bg-brown-900 text-white hover:bg-brown-800"
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check size={18} className="mr-2" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.p variants={itemVariants} className="text-brown-500 text-sm mt-4">
            We respect your privacy and will never share your information.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

