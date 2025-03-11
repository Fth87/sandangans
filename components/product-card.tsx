import { Product } from '@/app/marketplace/data';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({product = {
  id: 1,
  image: "/marketplace/products/back-view-athletic-biker-wearing-club-denim-shearling-jacket-helmet-isolated-white.png",
  name: "Basic Heavy Weight T-Shirt",
  price: 89000,
  originalPrice: 175000,
  slug: "basic-heavy-weight-t-shirt",
}}: {product?: Product}) {
  return (
    <Link href={`/marketplace/product/${product.slug}`} className="group ">
      <div className="relative aspect-square overflow-hidden">
        <Image src={product.image} alt={product.slug} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-brown-900 text-lg md:text-xl font-medium">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className=" text-lg font-medium">Rp {product.price.toLocaleString('id-ID')}</span>
          <span className="text-sm text-brown-50 px-2 bg-brown line-through">Rp {product.originalPrice.toLocaleString('id-ID')}</span>
        </div>
      </div>
    </Link>
  );
}
