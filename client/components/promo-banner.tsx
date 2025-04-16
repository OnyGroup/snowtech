import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="w-full mb-12">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 z-10 flex items-center justify-end">
          <div className="container px-4 md:px-6">
            <div className="ml-auto max-w-md space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black drop-shadow-sm">
                FEEL THE MUSIC
              </h2>
              <p className="text-xl md:text-2xl font-medium text-black drop-shadow-sm">New Wireless Pro</p>
              <p className="text-lg md:text-xl text-black drop-shadow-sm">
                Spatial Audio, Adjustable ear cups, On-device control, All-day battery
              </p>
              <div className="pt-4">
                <Button asChild className="bg-[#4A4A9C] text-white hover:bg-[#4A4A9C]/90">
                  <Link href="/offers">Show deals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/ecommerce/vacuum-cleaner.webp?height=778&width=1920&text=Wireless+Pro+Headphones"
          alt="Wireless Pro Headphones"
          fill
          className="object-cover"
        />
        {/* Removed the overlay div */}
      </div>
    </section>
  )
}