"use client"

import { useState } from "react"
import { ChevronDown, SlidersHorizontal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    priceRange: false,
    category: false,
  })

  const [selectedSort, setSelectedSort] = useState("relevance")

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[280px] bg-[#f5f3f0] z-50 overflow-y-auto"
            >
              <div className="p-4">
                {/* Sort Section */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Short</h3>
                  <div className="mb-4">
                    <button
                      className="flex justify-between items-center w-full py-2 text-left text-sm border-b border-gray-200"
                      onClick={() => toggleSection("sort")}
                    >
                      <span>Short By</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.sort ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedSections.sort && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-2 pl-1">
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="sort"
                                value="relevance"
                                checked={selectedSort === "relevance"}
                                onChange={() => setSelectedSort("relevance")}
                                className="accent-gray-800"
                              />
                              <span>Relevance</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="sort"
                                value="newest"
                                checked={selectedSort === "newest"}
                                onChange={() => setSelectedSort("newest")}
                                className="accent-gray-800"
                              />
                              <span>Newest</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="sort"
                                value="highest"
                                checked={selectedSort === "highest"}
                                onChange={() => setSelectedSort("highest")}
                                className="accent-gray-800"
                              />
                              <span>Highest Price</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="sort"
                                value="lowest"
                                checked={selectedSort === "lowest"}
                                onChange={() => setSelectedSort("lowest")}
                                className="accent-gray-800"
                              />
                              <span>Lowest Price</span>
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Filter Sections */}
                  <h3 className="font-medium mb-2">Filter</h3>

                  {/* Price Range */}
                  <div className="mb-4">
                    <button
                      className="flex justify-between items-center w-full py-2 text-left text-sm border-b border-gray-200"
                      onClick={() => toggleSection("priceRange")}
                    >
                      <span>Price Range</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.priceRange ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedSections.priceRange && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-4 pl-1">
                            <div className="flex gap-2">
                              <input
                                type="number"
                                placeholder="Min"
                                className="w-full p-2 border border-gray-300 rounded"
                              />
                              <input
                                type="number"
                                placeholder="Max"
                                className="w-full p-2 border border-gray-300 rounded"
                              />
                            </div>
                            <button className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                              Apply
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <button
                      className="flex justify-between items-center w-full py-2 text-left text-sm border-b border-gray-200"
                      onClick={() => toggleSection("category")}
                    >
                      <span>Category</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.category ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedSections.category && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-2 pl-1">
                            <label className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="accent-gray-800" />
                              <span>T-Shirts</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="accent-gray-800" />
                              <span>Shirts</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="accent-gray-800" />
                              <span>Pants</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="accent-gray-800" />
                              <span>Jackets</span>
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="accent-gray-800" />
                              <span>Accessories</span>
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

