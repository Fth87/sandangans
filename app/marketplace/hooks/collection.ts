import LIST_PRODUCT from "@/data/products.json";
import { Product } from "../data";

// Update the getCollectionById function to include more detailed data
export const  getCollectionById = (id: string) => {
  const collections = {
    'sustainable-basics': {
      id: 'sustainable-basics',
      title: 'Sustainable Basics',
      subtitle: 'BREATHABLE, COMFORTABLE, AND SUSTAINABLE',
      description: 'Made from post-consumer cotton waste, we recycled cotton into collection includes tees, dresses, and loungewear. Our sustainable basics are designed to be timeless, versatile, and kind to the planet.',
      longDescription:
        'Our sustainable basics collection represents our commitment to ethical fashion. Each piece is crafted from recycled materials, reducing waste and environmental impact without compromising on style or comfort. The collection features essential items that form the foundation of any wardrobe, designed with clean lines and timeless silhouettes that transcend seasonal trends.',
      heroImage: '/marketplace/collection2.jpg',
      galleryImages: ['/marketplace/sewing-denim-jacket-buttons.png', '/marketplace/sewing-denim-jacket-buttons.png', '/marketplace/sewing-denim-jacket-buttons.png'],
      products: (LIST_PRODUCT as Product[]).filter((item) => item.collection == 'sustainable-basics').map((product, i) => ({
        id: i + 1,
        name: product.name,
        price: product.price,
        slug: product.slug,
        originalPrice: product.originalPrice,
        image: product.image,
        colors: ['Black', 'White', 'Gray'],
        isNew: i < 3,
        isBestseller: i >= 3 && i < 6
      })),
    },
    'upcycled-denim': {
      id: 'upcycled-denim',
      title: 'Upcycled Denim',
      subtitle: 'FROM OLD JEANS TO TIMELESS FASHION',
      description: 'Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.',
      longDescription:
        'The Upcycled Denim collection transforms pre-loved denim into contemporary fashion pieces. Each item tells a unique story, carrying the character and history of its previous life while being reimagined into something fresh and modern. By giving new purpose to existing materials, we reduce waste and create one-of-a-kind pieces that celebrate individuality and conscious consumption.',
      heroImage: '/marketplace/collection2.jpg',
      galleryImages: ['/marketplace/sewing-denim-jacket-buttons.png', '/marketplace/sewing-denim-jacket-buttons.png', '/marketplace/sewing-denim-jacket-buttons.png'],
      products: (LIST_PRODUCT as Product[]).filter((item) => item.collection == 'upcycled-denim').map((product, i) => ({
        id: i + 1,
        name: product.name,
        price: product.price,
        slug: product.slug,
        originalPrice: product.originalPrice,
        image: product.image,
        colors: ['Black', 'White', 'Gray'],
        isNew: i < 3,
        isBestseller: i >= 3 && i < 6
      })),
    },
  };

  return collections[id as keyof typeof collections];
};
