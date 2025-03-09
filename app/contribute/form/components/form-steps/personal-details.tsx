"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormData } from "../contribute-form"


interface PersonalDetailsFormProps {
  data: FormData["personalDetails"]
  updateData: (data: FormData["personalDetails"]) => void
  onNext: () => void
}

export default function PersonalDetailsForm({ data, updateData, onNext }: PersonalDetailsFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateData({ ...data, [name]: value })

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!data.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    }

    if (!data.shippingAddress.trim()) {
      newErrors.shippingAddress = "Shipping address is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onNext()
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-brown-900 mb-6">Personal Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <motion.div whileFocus="focus"  variants={inputVariants}>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={handleChange}
              className={`border-brown-300 focus:border-brown-500 w-full ${errors.fullName ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <motion.div whileFocus="focus"  variants={inputVariants}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              className={`border-brown-300 focus:border-brown-500 ${errors.email ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <motion.div whileFocus="focus"  variants={inputVariants}>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={data.phoneNumber}
              onChange={handleChange}
              className={`border-brown-300 focus:border-brown-500 ${errors.phoneNumber ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="shippingAddress">Shipping Address</Label>
          <motion.div whileFocus="focus"  variants={inputVariants}>
            <Input
              id="shippingAddress"
              name="shippingAddress"
              placeholder="Enter your full address"
              value={data.shippingAddress}
              onChange={handleChange}
              className={`border-brown-300 focus:border-brown-500 ${errors.shippingAddress ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.shippingAddress && <p className="text-red-500 text-xs mt-1">{errors.shippingAddress}</p>}
          <p className="text-xs text-gray-500 mt-1">We'll send a prepaid shipping label to this address.</p>
        </div>

        <div className="pt-4 flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="bg-brown-800 hover:bg-brown-900 text-white px-8">
              Next
            </Button>
          </motion.div>
        </div>
      </form>
    </div>
  )
}

