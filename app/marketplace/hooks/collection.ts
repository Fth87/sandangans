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
      heroImage: '/images/marketplace/collection2.jpg',
      galleryImages: ['/images/marketplace/sewing-denim-jacket-buttons.png', '/images/marketplace/sewing-denim-jacket-buttons.png', '/images/marketplace/sewing-denim-jacket-buttons.png'],
      products: Array(12)
        .fill(null)
        .map((_, i) => ({
          id: i + 1,
          name: `Recycled Cotton ${i % 3 === 0 ? 'T-Shirt' : i % 3 === 1 ? 'Hoodie' : 'Sweatpants'}`,
          price: 89000 + i * 10000,
          originalPrice: 175000 + i * 15000,
          image: '/placeholder.svg?height=600&width=400',
          colors: ['Black', 'White', 'Gray'],
          isNew: i < 3,
          isBestseller: i >= 3 && i < 6,
        })),
    },
    'upcycled-denim': {
      id: 'upcycled-denim',
      title: 'Upcycled Denim',
      subtitle: 'FROM OLD JEANS TO TIMELESS FASHION',
      description: 'Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.',
      longDescription:
        'The Upcycled Denim collection transforms pre-loved denim into contemporary fashion pieces. Each item tells a unique story, carrying the character and history of its previous life while being reimagined into something fresh and modern. By giving new purpose to existing materials, we reduce waste and create one-of-a-kind pieces that celebrate individuality and conscious consumption.',
      heroImage: '/images/marketplace/collection2.jpg',
      galleryImages: ['/images/marketplace/sewing-denim-jacket-buttons.png', '/images/marketplace/sewing-denim-jacket-buttons.png', '/images/marketplace/sewing-denim-jacket-buttons.png'],
      products: Array(12)
        .fill(null)
        .map((_, i) => ({
          id: i + 20,
          name: `Upcycled Denim ${i % 3 === 0 ? 'Jacket' : i % 3 === 1 ? 'Skirt' : 'Bag'}`,
          price: 159000 + i * 20000,
          originalPrice: 275000 + i * 25000,
          image: '/placeholder.svg?height=600&width=400',
          colors: ['Light Blue', 'Dark Blue', 'Black'],
          isNew: i < 3,
          isBestseller: i >= 3 && i < 6,
        })),
    },
  };

  return collections[id as keyof typeof collections];
};
