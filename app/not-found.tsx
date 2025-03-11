import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center bg-brown-50 px-4",
      )}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-brown-100/20 blur-sm"></div>
            <div className="relative h-24 w-24 rounded-full bg-brown-100/30 flex items-center justify-center">
              <Leaf className="h-10 w-10 text-brown-400" />
            </div>
          </div>
        </div>

        <h1 className="font-title text-6xl md:text-7xl font-bold text-brown-500 mb-4">Page Not Found</h1>

        <p className="text-lg md:text-xl text-brown-400 mb-6 max-w-2xl mx-auto font-light">
          Like sustainable fashion, sometimes the best things require a little more searching. The page you're looking
          for seems to have wandered off our sustainable path.
        </p>

        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <Button asChild className="bg-brown-400 hover:bg-brown-500 text-white px-8 py-6 rounded-none">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-brown-400 text-brown-400 hover:bg-brown-400/10 px-8 py-6 rounded-none"
          >
            <Link href="/marketplace/collections">Browse Collections</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

