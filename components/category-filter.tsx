'use client';

import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import FilterSidebarMobile from './filter-sidebar-mobile';

interface CategoryFilterProps {
  categories?: string[];
}

export default function CategoryFilter({ categories = [] }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button onClick={toggleMobileFilter} className="p-2  transition-colors rounded-md" aria-label="Open filters">
          <SlidersHorizontal className="h-5 w-5" />
        </button>

        {categories?.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm border font-semibold border-brown-300 transition-colors  ${
              activeCategory === category ? ' text-brown border-brown' : ' text-brown-300 border-brown-300 hover:border-brown hover:text-brown hover:font-semibold'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <FilterSidebarMobile isOpen={isMobileFilterOpen} onClose={() => setIsMobileFilterOpen(false)} />
    </>
  );
}
