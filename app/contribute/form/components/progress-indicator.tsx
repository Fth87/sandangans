"use client"

import { motion } from "framer-motion"
import { Check, User, Package, ClipboardList } from "lucide-react"

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  onStepClick?: (step: number) => void
}

export default function ProgressIndicator({ currentStep, totalSteps, onStepClick }: ProgressIndicatorProps) {
  const steps = [
    { name: "Personal Details", icon: User },
    { name: "Item Details", icon: Package },
    { name: "Review", icon: ClipboardList },
  ]

  return (
    <div className="flex justify-center items-center w-full">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep
        const isClickable = stepNumber < currentStep || stepNumber === currentStep

        const StepIcon = step.icon

        return (
          <div key={step.name} className="flex items-center">
            {/* Step Circle */}
            <motion.button
              whileHover={isClickable ? { scale: 1.05 } : {}}
              whileTap={isClickable ? { scale: 0.95 } : {}}
              onClick={() => isClickable && onStepClick?.(stepNumber)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300 ${
                isActive
                  ? "bg-brown-800 border-brown-800 text-white"
                  : isCompleted
                    ? "bg-brown-800 border-brown-800 text-white"
                    : "bg-white border-gray-300 text-gray-400"
              } ${isClickable ? "cursor-pointer" : "cursor-default"}`}
            >
              {isCompleted ? <Check size={16} className="text-white" /> : <StepIcon size={16} />}

              {/* Step Number */}
              <span className="absolute -top-6 text-xs font-medium text-brown-800">{stepNumber}</span>
            </motion.button>

            {/* Step Name */}
            <span
              className={`hidden md:block absolute mt-12 text-xs font-medium ${
                isActive || isCompleted ? "text-brown-800" : "text-gray-400"
              }`}
            >
              {step.name}
            </span>

            {/* Connector Line */}
            {index < totalSteps - 1 && (
              <div className="flex-1 mx-2 h-0.5 w-16 bg-gray-300">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: isCompleted ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-brown-800"
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

