
export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  slug: string;
};

// Generate mock products
export const generateProducts = (start: number, count: number): Product[] => {
  return Array(count)
    .fill(null)
    .map((_, index) => ({
      id: start + index,
      name: 'Basic Heavy Weight T-Shirt',
      price: 89000,
      originalPrice: 175000,
      image: '/images/marketplace/contoh.png',
      slug: `basic-heavy-weight-t-shirt-${start + index}`,
    }));
};