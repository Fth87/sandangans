import Link from "next/link"

export default function CollectionNotFound() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-4xl mb-4">Collection Not Found</h1>
        <p className="text-gray-600 mb-8">The collection you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/collections"
          className="inline-block px-6 py-3 bg-[#2b2b2b] text-white hover:bg-black transition-colors"
        >
          Browse Collections
        </Link>
      </div>
    </div>
  )
}

