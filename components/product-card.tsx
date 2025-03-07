import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <Link href="/marketplace/product/basic-heavy-weight-t-shirt" className="group ">
      <div className="relative aspect-square overflow-hidden">
        <Image src="/images/marketplace/contoh.png" alt="Basic Heavy Weight T-Shirt" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-brown-900 text-lg md:text-xl font-medium">Basic Heavy Weight T-Shirt</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className=" text-lg font-medium">Rp 89.000</span>
          <span className="text-sm text-brown-50 px-2 bg-brown line-through">Rp 175.000</span>
        </div>
      </div>
    </Link>
  );
}
