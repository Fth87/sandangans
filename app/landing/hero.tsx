"use client"

import Image from "next/image"
import CardHero from "./components/hero-card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 xl:max-w-7xl">
      <div
        ref={ref}
        className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full py-16 lg:py-0"
      >
        <motion.div
          className="text-start max-w-xl mb-12 lg:mb-0"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-xl font-semibold font-sans text-brown">East 2025</p>
          <div className="text-brown text-3xl md:text-4xl lg:text-5xl font-bold font-title leading-tight mb-3">
            Sandangans: <br />
            Where Style Meets Sustainability
          </div>
          <div className="text-brown text-base md:text-lg font-light font-sans">
            Every stitch tells a story of recycled materials given new life. Discover fashion collections that are not
            only stylish but also kind to the planet.
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end items-center lg:items-end h-full relative mt-auto"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative pr-0 lg:pr-20">
            <CardHero
              title="Black Shoes"
              description="We recycling polyester to make the outsole of this shoes"
              image="/hero/sepatu.png"
              className="hidden md:flex -left-[15%] bottom-[5%]"
              href='marketplace/product/boots-shoe'
            />
            <CardHero
              title="Beige Hat"
              description="Handwoven from leftover fabric, this hat is as eco-friendly as it is stylish."
              image="/hero/hat.png"
              className="hidden md:flex right-[16%] top-[2%]"
              href='marketplace/product/beige-hat'
            />
            <CardHero
              title="Woman Outer"
              description="Handwoven from leftover fabric, this hat is as eco-friendly as it is stylish."
              image="/hero/outer.png"
              className="hidden md:flex right-[0%] bottom-[30%]"
              href='marketplace/product/brown-woman-outer'
            />
            <Image
              className="max-w-full md:max-w-[640px] w-auto h-auto"
              width={540}
              height={544}
              src="/hero/mascot.png"
              alt="hero mascott"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}


