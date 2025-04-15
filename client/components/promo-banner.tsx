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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white drop-shadow-md">
                FEEL THE MUSIC
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white drop-shadow-md">New Wireless Pro</p>
              <p className="text-lg md:text-xl text-white drop-shadow-md">
                Spatial Audio, Adjustable ear cups, On-device control, All-day battery
              </p>
              <div className="pt-4">
                <Button asChild className="bg-white text-[#4A4A9C] hover:bg-white/90">
                  <Link href="/products">Show deals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/placeholder.svg?height=600&width=1920&text=Wireless+Pro+Headphones"
          alt="Wireless Pro Headphones"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
      </div>
    </section>
  )
}
