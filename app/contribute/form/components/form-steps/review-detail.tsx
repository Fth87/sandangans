"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { FormData } from "../contribute-form"

interface ReviewFormProps {
  formData: FormData
  onSubmit: () => void
  onBack: () => void
}

export default function ReviewForm({ formData, onSubmit, onBack }: ReviewFormProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Calculate estimated rewards based on items
  const calculateRewards = () => {
    let total = 0

    formData.items.forEach((item) => {
      let basePrice = 0

      // Base price by type
      switch (item.type) {
        case "Outerwear":
          basePrice = 20000
          break
        case "Dresses":
          basePrice = 15000
          break
        case "Tops":
        case "Bottoms":
          basePrice = 13000
          break
        case "Accessories":
          basePrice = 8000
          break
        default:
          basePrice = 10000
      }

      // Condition multiplier
      let conditionMultiplier = 1
      switch (item.condition) {
        case "Like New":
          conditionMultiplier = 1
          break
        case "Good (Minor Wear)":
          conditionMultiplier = 0.8
          break
        case "Fair (Visible Signs of Use)":
          conditionMultiplier = 0.6
          break
        case "Poor (Significant Wear)":
          conditionMultiplier = 0.3
          break
      }

      total += basePrice * conditionMultiplier * item.quantity
    })

    return Math.round(total)
  }

  const formatCurrency = (amount: number) => {
    return `Rp ${amount.toLocaleString("id-ID")}`
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-brown-900 mb-6">Review</h2>

      <div className="space-y-6">
        {/* Personal Details Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 p-4 rounded-md"
        >
          <h3 className="font-medium text-lg text-brown-800 mb-3">Personal Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name:</p>
              <p className="font-medium">{formData.personalDetails.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email:</p>
              <p className="font-medium">{formData.personalDetails.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone Number:</p>
              <p className="font-medium">{formData.personalDetails.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address:</p>
              <p className="font-medium">{formData.personalDetails.shippingAddress}</p>
            </div>
          </div>
        </motion.div>

        {/* Items Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-3"
        >
          <h3 className="font-medium text-lg text-brown-800">Item Details</h3>

          {formData.items.map((item, index) => (
            <div key={item.id} className="border border-gray-200 rounded-md overflow-hidden">
              <div
                className="bg-gray-50 p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h4 className="font-medium text-brown-800">{item.name}</h4>
                <button type="button">
                  {expandedItems.includes(index) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {expandedItems.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-white"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Item Type:</p>
                      <p className="font-medium">{item.type || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fabric Composition:</p>
                      <p className="font-medium">{item.fabricComposition || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Condition:</p>
                      <p className="font-medium">{item.condition || "Not specified"}</p>
                    </div>
                  </div>

                  {item.images.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 mb-2">Images:</p>
                      <div className="flex space-x-2">
                        {item.images.map((image, imageIndex) => (
                          <img
                            key={imageIndex}
                            src={image || "/placeholder.svg"}
                            alt={`${item.name} image ${imageIndex + 1}`}
                            className="w-16 h-16 object-cover rounded-md border border-gray-200"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Estimated Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-brown-50 p-4 rounded-md"
        >
          <h3 className="font-medium text-lg text-brown-800 mb-3">Estimated Rewards</h3>
          <p className="text-sm text-gray-600 mb-3">
            These are estimated values based on the information you've provided. Final rewards will be determined after
            we receive and inspect your items.
          </p>

          {formData.items.map((item, index) => (
            <div key={index} className="flex justify-between py-1 border-b border-brown-100 last:border-0">
              <span className="text-sm">
                {item.quantity}x {item.type} ({item.condition})
              </span>
              <span className="font-medium">{formatCurrency(calculateRewards() / formData.items.length)}</span>
            </div>
          ))}

          <div className="flex justify-between mt-4 pt-2 border-t border-brown-200 font-bold">
            <span>Estimated Total:</span>
            <span>{formatCurrency(calculateRewards())}</span>
          </div>
        </motion.div>

        <div className="pt-4 flex justify-end space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-brown-800 text-brown-800 hover:bg-brown-50"
            >
              Back
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="button" onClick={onSubmit} className="bg-brown-800 hover:bg-brown-900 text-white px-8">
              Submit
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

