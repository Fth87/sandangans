"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

export default function CollectionHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      id: 1,
      images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    },
    {
      id: 2,
      images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className="relative px-4 md:px-8 lg:px-12 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-2">
            NEW
            <br />
            COLLECTION
          </h1>
          <p className="text-gray-700 mb-6">
            Timeless
            <br />
            Denim
          </p>

          <button className="flex items-center gap-2 bg-[#d9d4cf] hover:bg-[#c9c4bf] transition-colors py-3 px-6 text-sm">
            Go To Collection
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="flex gap-4 overflow-hidden">
            {slides[currentSlide].images.map((image, index) => (
              <div key={index} className="relative w-full h-[300px] md:h-[400px]">
                <Image src={image || "/placeholder.svg"} alt="Collection image" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={prevSlide}
              className="p-2 border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

