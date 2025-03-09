"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CardHeroProps {
  title: string
  description: string
  image: string
  className?: string
}

export default function CardHero({ title, description, image, className }: CardHeroProps) {
  return (
    <motion.div
      className={cn(
        "absolute w-56 pl-3 pr-8 py-2 bg-brown-100 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] justify-start items-start gap-2 inline-flex overflow-hidden",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Image alt="image" className="w-16 h-16" width={64} height={64} src={image || "/placeholder.svg"} />
      <div className="flex-col justify-center items-start gap-1 inline-flex">
        <div className="text-black text-base font-medium font-title">{title}</div>
        <div className="self-stretch text-[#7f716a] text-[8px] font-normal font-sans">{description}</div>
      </div>

      <motion.div
        className="bg-brown-200 absolute right-0 bottom-0 hover:cursor-pointer"
        whileHover={{
          backgroundColor: "#5d4037",
          transition: { duration: 0.2 },
        }}
      >
        <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
          <ArrowUpRight size={32} color="white" className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

