import Image from "next/image"

import { Button } from "@/components/ui/button"

export function ModernLivingSection() {
  return (
    <section className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/images/modern-home-living.webp?height=570&width=1600&text=Modern+Living+Sunset"
          alt="Modern home living with sunset view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              The future of modern home living
            </h2>
            <p className="text-lg md:text-xl text-white">
              A new generation of appliances and home entertainment is coming to revolutionize your day-to-day with
              advanced AI integration.
            </p>
          </div>
        </div>
      </div>

      {/* Three Cards Section */}
      <div className="bg-gray-900 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Snow Home AI */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/red_air_fryer.webp?height=300&width=400&text=Red+Air+Fryer"
                  alt="Red Air Fryer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-center">Streamline your home with Snow Home AI</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Save up to KES 120,000+ with our Connected Home AI appliances. Get up to KES. 80,000 off instantly,
                  plus 3 years of Snow Care+ for just KES. 40,000
                </p>
                <div className="flex justify-center">
                  <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Book a free consultation</Button>
                </div>
              </div>
            </div>

            {/* Card 2: Kitchen Modernization */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/black-air-fryer.webp?height=300&width=400&text=Black+Air+Fryer"
                  alt="Black Air Fryer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-center">Modernize your kitchen with the best quality</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Experience dynamic intelligence that optimizes your picture and sound, based on what you&apos;re watching.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Shop kitchen appliances now</Button>
                </div>
              </div>
            </div>

            {/* Card 3: Interior Fitting */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/modern-living-room.webp?height=300&width=400&text=Modern+Living+Room"
                  alt="Modern Living Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-center">
                  Refresh your living with bespoke interior fitting
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Experience dynamic intelligence that optimizes your picture and sound, based on what you&apos;re watching.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Book a free consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
