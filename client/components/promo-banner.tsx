"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  // Define promotional banners content
  const promoItems = [
    {
      image: "/images/ecommerce/vacuum-cleaner.webp",
      title: "CLEAN WITH EASE",
      subtitle: "New Suction Pro",
      description: "Powerful suction. Lightweight design. Long-lasting battery. Perfect for all surfaces.",
      buttonText: "Show deals",
      buttonLink: "/offers",
    },
    {
      image: "/images/ecommerce/solar-panels.webp",
      title: "GO GREEN",
      subtitle: "Solar Energy Solutions",
      description: "Lower your bills and carbon footprint with clean renewable energy.",
      buttonText: "Explore solar",
      buttonLink: "/home-energy",
    },
    {
      image: "/images/ecommerce/microwave.webp",
      title: "SMART KITCHEN",
      subtitle: "Connected Appliances",
      description: "Modern kitchens deserve modern technology. Control from your smartphone.",
      buttonText: "Shop now",
      buttonLink: "/home-appliances",
    },
  ]

  // autoplay plugin with options
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  )

  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false }, [
    autoplayPlugin.current,
  ])

  // Make sure autoplay starts when component mounts
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("init", () => {
        console.log("Carousel initialized")
      })
    }

    return () => {
      // Clean up autoplay when component unmounts
      if (autoplayPlugin.current && autoplayPlugin.current.reset) {
        autoplayPlugin.current.reset()
      }
    }
  }, [emblaApi])

  return (
    <section className="w-full mb-12 relative">
      {/* Wavy Gradient Background - Fixed position outside the carousel */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50"></div>
        <svg
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient1)"
            fillOpacity="0.4"
          ></path>
          <path
            d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient2)"
            fillOpacity="0.6"
          ></path>
          <path
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient3)"
            fillOpacity="0.3"
          ></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5b4fc" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="50%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#5eead4" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ddd6fe" />
              <stop offset="50%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#a7f3d0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Carousel - Separate from the background */}
      <div className="relative overflow-hidden z-10" ref={emblaRef}>
        <div className="flex">
          {promoItems.map((item, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <div className="absolute inset-0 z-10 flex items-center justify-end">
                  <div className="container px-4 md:px-6">
                    <div className="ml-auto max-w-md space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black drop-shadow-sm">
                        {item.title}
                      </h2>
                      <p className="text-xl md:text-2xl font-medium text-black drop-shadow-sm">{item.subtitle}</p>
                      <p className="text-lg md:text-xl text-black drop-shadow-sm">{item.description}</p>
                      <div className="pt-4">
                        <Button asChild className="bg-[#4A4A9C] text-white hover:bg-[#4A4A9C]/90">
                          <Link href={item.buttonLink}>{item.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - ${item.subtitle}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
