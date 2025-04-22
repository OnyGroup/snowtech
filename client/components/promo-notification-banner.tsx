"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"

export function PromoNotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-[#4A4A9C] text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base">
            Welcome back. Continue shopping and take advantage of our latest offers on{" "}
            <Link href="/home-appliances" className="font-semibold hover:underline">
              Home Appliances
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/offers" className="flex items-center text-sm font-medium hover:underline whitespace-nowrap">
            Buy now <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
