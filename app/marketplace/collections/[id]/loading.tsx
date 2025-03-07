import { Loader2 } from "lucide-react"

export default function CollectionLoading() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <Loader2 className="h-12 w-12 animate-spin text-gray-700" />
        <p className="mt-4 text-gray-700 font-medium">Loading collection...</p>
        <p className="text-gray-500 text-sm mt-2">Please wait while we prepare this collection for you</p>
      </div>
    </div>
  )
}

