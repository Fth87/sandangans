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

export const collections = [
  {
    id: 'sustainable-basics',
    title: 'BREATHABLE, COMFORTABLE, AND SUSTAINABLE',
    description: 'Made from post-consumer cotton waste, we recycled cotton into collection includes tees, dresses, and loungewear.',
    image: '/images/marketplace/sewing-denim-jacket-buttons.png',
    products: generateProducts(1, 3),
  },
  {
    id: 'upcycled-denim',
    title: 'FROM OLD JEANS TO TIMELESS FASHION',
    description: 'Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.',
    image: '/images/marketplace/young-teenage-boy-wearing-denim-outfit-1.png',
    products: generateProducts(1, 3),
  },
];
