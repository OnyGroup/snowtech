"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ResidentialACShowcase() {
  const categories = ["Split Air Conditioners", "Ceiling Fans", "Standing Fans", "Snowtech Inverter"]

  const [activeCategory, setActiveCategory] = useState("Split Air Conditioners")

  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Deep Blue Textured Background */}
      <div className="absolute inset-0 bg-blue-900">
        {/* Add texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=100&width=100&text=Texture')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Residential AC</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors",
                  activeCategory === category ? "bg-blue-600 text-white" : "bg-white/20 text-white hover:bg-white/30",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Showcase */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-full max-w-4xl h-[400px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px]">
                <Image
                  src="/placeholder.svg?height=150&width=400&text=Indoor+AC+Unit"
                  alt="Indoor AC Unit"
                  width={400}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px]">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Outdoor+AC+Unit"
                  alt="Outdoor AC Unit"
                  width={400}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="absolute top-1/2 right-0 md:right-20 w-[100px]">
                <Image
                  src="/placeholder.svg?height=150&width=100&text=Remote+1"
                  alt="AC Remote Control"
                  width={100}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-20 right-0 md:right-20 w-[100px]">
                <Image
                  src="/placeholder.svg?height=150&width=100&text=Remote+2"
                  alt="AC Remote Control"
                  width={100}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Experience the Snowtech cooling effect
          </h3>

          {/* Promotional Text */}
          <p className="text-white text-center mb-8 max-w-3xl">
            Pre-order and save KES. 25,000. Get KES. 15,000 off instantly, plus 2 years of Snow Care+ for KES 10,000 and
            more
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/products/residential-ac">Shop all residential AC deals</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/products/residential-ac/pre-order">Pre-order now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
