"use client"

import { useState, useEffect } from "react"
import { ChevronDown, X } from "lucide-react"

interface FilterSidebarMobileProps {
  isOpen: boolean
  onClose: () => void
}

export default function FilterSidebarMobile({ isOpen, onClose }: FilterSidebarMobileProps) {
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    priceRange: false,
    category: false,
  })

  const [selectedSort, setSelectedSort] = useState("relevance")

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [onClose])

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50
          w-[280px] bg-[#f5f3f0]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          border-r border-gray-200
          overflow-y-auto
        `}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filters</h3>
            <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sort Section */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Short</h3>
            <div className="mb-4">
              <button
                className="flex justify-between items-center w-full py-2 text-left text-sm border-b border-gray-200"
                onClick={() => toggleSection("sort")}
              >
                <span>Short By</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.sort ? "rotate-180" : ""}`} />
              </button>

              {expandedSections.sort && (
                <div className="mt-2 space-y-2 pl-1">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="sort-mobile"
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
                      name="sort-mobile"
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
                      name="sort-mobile"
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
                      name="sort-mobile"
                      value="lowest"
                      checked={selectedSort === "lowest"}
                      onChange={() => setSelectedSort("lowest")}
                      className="accent-gray-800"
                    />
                    <span>Lowest Price</span>
                  </label>
                </div>
              )}
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

              {expandedSections.priceRange && (
                <div className="mt-2 space-y-4 pl-1">
                  <div className="flex gap-2">
                    <input type="number" placeholder="Min" className="w-full p-2 border border-gray-300 rounded" />
                    <input type="number" placeholder="Max" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <button className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                    Apply
                  </button>
                </div>
              )}
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

              {expandedSections.category && (
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
              )}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

