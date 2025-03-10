import LIST_PRODUCT from "@/data/products.json";
export type Product = {
  id: number | string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  slug: string;
  description?: string;
  collection?: string;
};

// Generate mock products
export const generateProducts = (start: number, count: number): Product[] => {
  return (LIST_PRODUCT as Product[]).slice(start - 1, start + count);
};

export const collections = [
  {
    id: 'sustainable-basics',
    title: 'BREATHABLE, COMFORTABLE, AND SUSTAINABLE',
    description: 'Made from post-consumer cotton waste, we recycled cotton into collection includes tees, dresses, and loungewear.',
    image: '/marketplace/products/unisex-brown-sweater.png',
    products: (LIST_PRODUCT as Product[]).filter((item) => item.collection == 'sustainable-basics'),
  },
  {
    id: 'upcycled-denim',
    title: 'FROM OLD JEANS TO TIMELESS FASHION',
    description: 'Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.',
    image: '/marketplace/young-teenage-boy-wearing-denim-outfit-1.png',
    products: (LIST_PRODUCT as Product[]).filter((item) => item.collection == 'upcycled-denim'),
  },
];
