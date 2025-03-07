"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

interface BackButtonProps {
  label?: string
  className?: string
}

export default function BackButton({ label = "Back", className = "" }: BackButtonProps) {
  const router = useRouter()

  return (
    <motion.button
      onClick={() => router.back()}
      className={`flex items-center gap-2 text-gray-700 hover:text-black transition-colors group ${className}`}
      whileHover={{ x: -3 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md group-hover:bg-gray-100 transition-colors">
        <ArrowLeft className="h-4 w-4" />
      </span>
      <span className="font-medium">{label}</span>
    </motion.button>
  )
}

