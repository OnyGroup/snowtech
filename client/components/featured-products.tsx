import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

interface ProductPromo {
  id: string
  title: string
  savings: string
  image: string
  isNew?: boolean
}

export function FeaturedProducts() {
  // Categories for the filter buttons
  const categories = ["Home Appliances", "Residential AC", "Home Energy", "Accessories"]

  // Featured products data
  const featuredProducts: ProductPromo[] = [
    {
      id: "air-purifier",
      title: "Snow Air Purifier",
      savings: "5,000",
      image: "/images/air_purifier.webp?height=600&width=1000&text=Air+Purifier",
      isNew: true,
    },
    {
      id: "air-fryer",
      title: "Snow Air Fryer",
      savings: "6,000",
      image: "/images/snow_air_fryer.webp?height=300&width=300&text=Air+Fryer",
      isNew: true,
    },
    {
      id: "iron-box",
      title: "retro hot iron-box",
      savings: "1,500",
      image: "/images/retro-iron-box.png?height=300&width=300&text=Iron+Box",
      isNew: true,
    },
    {
      id: "gas-cooker",
      title: "6-burner gas cooker",
      savings: "20,000",
      image: "/images/gas_burner.webp?height=300&width=300&text=Gas+Cooker",
      isNew: true,
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">Shop all latest products and innovations</h2>
          <Link href="/offers" className="text-blue-600 hover:underline">
            View all offers
          </Link>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large collection promo */}
          <div className="md:col-span-1 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative p-6 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-full">
                  <Image
                    src="/images/fridge_oven1.jpg"
                    alt="Refrigerator"
                    width={801}
                    height={909}
                    className="object-contain w-full h-full mx-auto"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Save KES. 120,000+ on</h3>
                <p className="text-xl font-bold">Snowtech Collection</p>
              </div>
            </div>
          </div>

          {/* Product promos grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  <div className="p-4 flex items-center justify-center h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold">Save KES. {product.savings} on</h3>
                    <p className="font-medium">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
