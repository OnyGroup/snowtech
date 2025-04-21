"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AppliancesShowcase() {
  const categories = [
    "Refrigerators",
    "Washing Machines",
    "Microwave",
    "Vacuum Cleaners",
    "Dishwashers",
    "Water Dispenser",
  ]

  const [activeCategory, setActiveCategory] = useState("Washing Machines")

  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stretch.png"
          alt="Snowtech Washing Machines Background"
          fill
          className="object-cover"
          priority
        />
        {/* Semi-transparent overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-pink-300/40 to-blue-500/40" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Home appliances</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors",
                  activeCategory === category ? "bg-blue-900 text-white" : "bg-white/20 text-white hover:bg-white/30",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Empty space where the product image used to be */}
          <div className="h-[200px] md:h-[300px]"></div>

          {/* Product Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Snowtech Washing machines</h3>

          {/* Promotional Text */}
          <p className="text-white text-center mb-8 max-w-3xl">
            Pre-order and save KES. 25,000. Get KES. 15,000 off instantly, plus 2 years of Snow Care+ for KES 10,000 and
            more
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/products/home-appliances">Shop all home appliances deals</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/products/washing-machines/pre-order">Pre-order now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
