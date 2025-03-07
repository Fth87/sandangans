"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const trendingProducts = [
  {
    id: 1,
    name: "Basic Heavy Weight T-Shirt",
    price: 89000,
    originalPrice: 175000,
    image: "/placeholder.svg?height=600&width=450",
    slug: "basic-heavy-weight-t-shirt",
  },
  {
    id: 2,
    name: "Premium Leather Boots",
    price: 450000,
    originalPrice: 750000,
    image: "/placeholder.svg?height=600&width=450",
    slug: "premium-leather-boots",
  },
  {
    id: 3,
    name: "Linen Blend Coat",
    price: 389000,
    originalPrice: 620000,
    image: "/placeholder.svg?height=600&width=450",
    slug: "linen-blend-coat",
  },
]

export default function TrendingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = trendingProducts.length - 1
      if (nextIndex >= trendingProducts.length) nextIndex = 0
      return nextIndex
    })
  }, [])

  const getProductIndex = (offset: number) => {
    let index = currentIndex + offset
    if (index < 0) index = trendingProducts.length - 1
    if (index >= trendingProducts.length) index = 0
    return index
  }

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Image */}
        <motion.div
          className="absolute left-0 w-1/4 h-4/5 transform -rotate-6 origin-bottom-right"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={trendingProducts[getProductIndex(-1)].image || "/placeholder.svg"}
              alt="Previous product"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Center Image */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-1/2 h-full z-10"
          >
            <div className="relative w-full h-full">
              <Image
                src={trendingProducts[currentIndex].image || "/placeholder.svg"}
                alt={trendingProducts[currentIndex].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">{trendingProducts[currentIndex].name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">Rp {trendingProducts[currentIndex].price.toLocaleString("id-ID")}</span>
                    <span className="text-sm text-gray-300 line-through">
                      Rp {trendingProducts[currentIndex].originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Image */}
        <motion.div
          className="absolute right-0 w-1/4 h-4/5 transform rotate-6 origin-bottom-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={trendingProducts[getProductIndex(1)].image || "/placeholder.svg"}
              alt="Next product"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

