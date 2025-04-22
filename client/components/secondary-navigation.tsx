import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SecondaryNavigation() {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200 py-2">
      <div className="container mx-auto px-4 flex items-center justify-end gap-6">
        <Link href="/brandshop" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
          <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 flex items-center justify-center">⊕</span>
          Snowtech Brandshop
        </Link>
        <Link href="/projects" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
          <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 flex items-center justify-center">
            🏠
          </span>
          Projects
        </Link>
        <Link href="/support" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
          <span className="inline-block w-5 h-5 mr-2 rounded-full bg-gray-200 flex items-center justify-center">
            📞
          </span>
          Support
        </Link>
        <Link
          href="/business"
          className="flex items-center text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          For Business
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
