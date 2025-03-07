// import React from 'react'

// export default function productconcept() {
  // const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  // const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [sortOption, setSortOption] = useState('featured');
  // const [isSortOpen, setIsSortOpen] = useState(false);
  // const [visibleProducts, setVisibleProducts] = useState(8);
//     // Filter products based on selected filter
//     const filteredProducts = collection.products.filter((product) => {
//       if (!selectedFilter) return true;
//       if (selectedFilter === 'new') return product.isNew;
//       if (selectedFilter === 'bestseller') return product.isBestseller;
//       return true;
//     });
  
//     // Sort products based on selected sort option
//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (sortOption === 'price-low') return a.price - b.price;
//       if (sortOption === 'price-high') return b.price - a.price;
//       return 0; // Default: featured
//     });
  
//     // Load more products
//     const handleLoadMore = () => {
//       setVisibleProducts((prev) => Math.min(prev + 4, sortedProducts.length));
//     };
//   return (
//     <div>{/* Products Section */}
//     <section id="products" className="py-16 container mx-auto px-4">
//     <motion.h2 className="font-serif text-3xl md:text-4xl mb-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//       Products
//     </motion.h2>
    
//     {/* Filters and Sort */}
//     <motion.div
//       className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//     >
//       {/* Filter */}
//       <div className="relative">
//         <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
//           <Filter className="h-4 w-4" />
//           <span>Filter</span>
//           <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
//         </button>
    
//         <AnimatePresence>
//           {isFilterOpen && (
//             <motion.div
//               className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="p-2">
//                 <button
//                   className={`w-full text-left px-3 py-2 rounded-md ${!selectedFilter ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//                   onClick={() => {
//                     setSelectedFilter(null);
//                     setIsFilterOpen(false);
//                   }}
//                 >
//                   All Products
//                 </button>
//                 <button
//                   className={`w-full text-left px-3 py-2 rounded-md ${selectedFilter === 'new' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//                   onClick={() => {
//                     setSelectedFilter('new');
//                     setIsFilterOpen(false);
//                   }}
//                 >
//                   New Arrivals
//                 </button>
//                 <button
//                   className={`w-full text-left px-3 py-2 rounded-md ${selectedFilter === 'bestseller' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//                   onClick={() => {
//                     setSelectedFilter('bestseller');
//                     setIsFilterOpen(false);
//                   }}
//                 >
//                   Bestsellers
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
    
//       {/* Sort */}
//       <div className="relative">
//         <button onClick={() => setIsSortOpen(!isSortOpen)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white">
//           <span>Sort: {sortOption === 'featured' ? 'Featured' : sortOption === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}</span>
//           <ChevronDown className={`h-4 w-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
//         </button>
    
//         <AnimatePresence>
//           {isSortOpen && (
//             <motion.div
//               className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="p-2">
//                 <button
//                   className={`w-full text-left px-3 py-2 rounded-md ${sortOption === 'featured' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//                   onClick={() => {
//                     setSortOption('featured');
//                     setIsSortOpen(false);
//                   }}
//                 >
//                   Featured
//                 </button>
//                 <button
//                   className={`w-full text-left px-3 py-2 rounded-md ${sortOption === 'price-low' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//                   onClick={() => {
//                     setSortOption('price-low');
//                     setIsSortOpen(false);
//                   }}
//                 >
//                   Price: Low to High
//                 </button>
//                 <button
//                   className={`w-full text-left px-3 py-2 rounded-md ${sortOption === 'price-high' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//                   onClick={() => {
//                     setSortOption('price-high');
//                     setIsSortOpen(false);
//                   }}
//                 >
//                   Price: High to Low
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
    
//     {/* Active Filters */}
//     <AnimatePresence>
//       {selectedFilter && (
//         <motion.div className="flex items-center gap-2 mb-6" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
//           <span className="text-sm text-gray-500">Active filter:</span>
//           <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
//             {selectedFilter === 'new' ? 'New Arrivals' : 'Bestsellers'}
//             <button onClick={() => setSelectedFilter(null)} className="ml-1 text-gray-500 hover:text-gray-700">
//               <X className="h-3 w-3" />
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
    
//     {/* Products Grid */}
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//       {sortedProducts.slice(0, visibleProducts).map((product, index) => (
//         <motion.div
//           key={product.id}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
//           whileHover={{ y: -5 }}
//           className="group"
//         >
//           <Link href={`/product/${product.id}`} className="block">
//             <div className="relative aspect-[3/4] bg-white mb-3 overflow-hidden rounded-sm shadow-sm">
//               <Image
//                 src={product.image || '/placeholder.svg?height=600&width=400'}
//                 alt={product.name}
//                 fill
//                 sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />
    
//               {/* Quick add to cart button */}
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
//                 <motion.button className="bg-white text-black px-4 py-2 rounded-sm flex items-center gap-2 text-sm shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <ShoppingBag className="h-4 w-4" />
//                   Quick Add
//                 </motion.button>
//               </div>
    
//               {/* Product badges */}
//               <div className="absolute top-2 left-2 flex flex-col gap-1">
//                 {product.isNew && <span className="bg-black text-white text-xs px-2 py-1">New</span>}
//                 {product.isBestseller && <span className="bg-[#d4af37] text-white text-xs px-2 py-1">Bestseller</span>}
//               </div>
//             </div>
    
//             <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="font-medium text-sm md:text-base">{formatPrice(product.price)}</span>
//               <span className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
//             </div>
    
//             {/* Color options */}
//             <div className="flex items-center gap-1 mt-2">
//               {product.colors.map((color, i) => (
//                 <div
//                   key={i}
//                   className="w-3 h-3 rounded-full border border-gray-300"
//                   style={{
//                     backgroundColor:
//                       color.toLowerCase() === 'black'
//                         ? '#000'
//                         : color.toLowerCase() === 'white'
//                         ? '#fff'
//                         : color.toLowerCase() === 'gray'
//                         ? '#888'
//                         : color.toLowerCase() === 'light blue'
//                         ? '#add8e6'
//                         : color.toLowerCase() === 'dark blue'
//                         ? '#00008b'
//                         : '#ddd',
//                   }}
//                 />
//               ))}
//               <span className="text-xs text-gray-500 ml-1">{product.colors.length} colors</span>
//             </div>
//           </Link>
//         </motion.div>
//       ))}
//     </div>
    
//     {/* Load More Button */}
//     {visibleProducts < sortedProducts.length && (
//       <motion.div className="flex justify-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//         <motion.button onClick={handleLoadMore} className="px-6 py-3 bg-[#2b2b2b] text-white hover:bg-black transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//           Load More
//         </motion.button>
//       </motion.div>
//     )}
//     </section></div>
//   )
// }
