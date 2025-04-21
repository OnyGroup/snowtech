import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function SnowCareSupport() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 bg-gray-900 py-16 px-6 md:px-12 lg:px-16 flex items-center">
          <div className="max-w-xl">
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

        {/* Right Image Area */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/placeholder.svg?height=600&width=800&text=Technician+Servicing+Appliance"
            alt="Technician servicing an appliance"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
