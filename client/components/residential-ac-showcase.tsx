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
    <section className="w-full py-12 relative overflow-hidden">
      {/* Deep blue background */}
      <div
        className="absolute inset-0 z-0 bg-blue-900"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #0c2d6b, #051c45)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Residential AC</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  activeCategory === category ? "bg-indigo-500 text-white" : "bg-white/20 text-white hover:bg-white/30",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* AC Unit Image */}
          <div className="flex justify-center mb-16 w-full max-w-2xl mx-auto">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/image4.png"
                alt="Split AC Unit with Components"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Title */}
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Experience the Snowtech cooling effect</h3>

          {/* Promotional Text */}
          <p className="text-white text-center mb-8 max-w-3xl">
            Pre-order and save KES. 25,000. Get KES. 15,000 off instantly, plus 2 years of Snow Care+ for KES 10,000 and
            more
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
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
