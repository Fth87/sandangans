"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { formatPrice } from "@/lib/utils"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
}

interface MobileOptimizedCarouselProps {
  products: Product[]
}

export default function MobileOptimizedCarousel({ products }: MobileOptimizedCarouselProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isTouching, setIsTouching] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Add more products to make the carousel more interesting
  const extendedProducts = [...products, ...products, ...products].map((product, index) => ({
    ...product,
    id: product.id + index * products.length,
  }))

  const checkScrollable = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 5) // Small threshold to avoid flickering
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollable)
      window.addEventListener("resize", checkScrollable)
      // Initial check
      checkScrollable()

      return () => {
        container.removeEventListener("scroll", checkScrollable)
        window.removeEventListener("resize", checkScrollable)
      }
    }
  }, [products])

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const container = containerRef.current
    const isMobile = window.innerWidth < 640
    const scrollAmount = isMobile
      ? container.querySelector(".carousel-item")?.clientWidth || container.clientWidth * 0.7
      : container.clientWidth * 0.8

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative group w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 pb-4 px-4 -mx-4 md:px-0 md:mx-0 max-w-[100vw]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
      >
        {extendedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.5) }}
            className="carousel-item flex-none w-[130px] xs:w-[160px] sm:w-[180px] snap-start"
          >
            <Link href={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] bg-white mb-2 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 640px) 160px, 180px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium truncate">{product.name}</h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm font-medium">{formatPrice(product.price)}</span>
                <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => scroll("left")}
            className="absolute left-4 md:left-0 top-[30%] -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 border border-gray-200 rounded-full shadow-md z-10 opacity-90 md:opacity-0 md:group-hover:opacity-90 transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={() => scroll("right")}
            className="absolute right-4 md:right-0 top-[30%] -translate-y-1/2 md:translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 border border-gray-200 rounded-full shadow-md z-10 opacity-90 md:opacity-0 md:group-hover:opacity-90 transition-opacity"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll Indicator - Mobile Only */}
      <div className="flex justify-center mt-1 md:hidden">
        <div className="flex gap-1">
          <div className={`h-1 w-8 rounded-full ${canScrollLeft ? "bg-gray-300" : "bg-gray-500"}`}></div>
          <div className={`h-1 w-8 rounded-full ${canScrollRight ? "bg-gray-300" : "bg-gray-500"}`}></div>
        </div>
      </div>
    </div>
  )
}

