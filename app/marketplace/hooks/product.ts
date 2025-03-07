'use client';
import { useState } from 'react';
import { generateProducts, Product } from '../data';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(generateProducts(1, 8));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newProducts = generateProducts(products.length + 1, 8);
    setProducts((prev) => [...prev, ...newProducts]);

    // For demo purposes, stop loading more after 24 items
    if (products.length + 8 >= 24) {
      setHasMore(false);
    }

    setIsLoading(false);
  };

  return { products, isLoading, hasMore, loadMore };
}

