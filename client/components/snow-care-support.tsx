import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function SnowCareSupport() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image7.png"
          alt="Technician servicing an appliance"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-xl ml-0 pl-0">
          <p className="text-gray-400 mb-3">Snow Care</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Built-in support for the first 12 months from the day you receive your product
          </h2>
          <p className="text-gray-300 mb-8">
            Get peace of mind with Snow Care. Explore device, home appliance and electronics warranty and support and
            get the most out of our products.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/snow-care">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
