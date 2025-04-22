"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroCarousel() {
  // State to track the current slide index
  const [selectedIndex, setSelectedIndex] = useState(0)

  // carousel slides
  const carouselSlides = [
    {
      image: "/images/ecommerce/hero1.webp",
      title: "SPECIAL OFFER",
      subtitle: "Hot deals, No Sweat",
      description1: "Stay connected, Stay Ahead",
      description2: "and Stay Stylish",
      buttonText: "Browse offers",
      buttonLink: "/offers",
    },
    {
      image: "/images/ecommerce/hvac.webp",
      title: "COOLING SOLUTIONS",
      subtitle: "Beat the Heat",
      description1: "Stay cool with our energy-efficient",
      description2: "air conditioning systems",
      buttonText: "View HVAC products",
      buttonLink: "/residential-ac",
    },
    {
      image: "/images/ecommerce/oven.webp",
      title: "KITCHEN ESSENTIALS",
      subtitle: "Cook Like a Pro",
      description1: "Premium kitchen appliances",
      description2: "for the modern home",
      buttonText: "Explore appliances",
      buttonLink: "/home-appliances",
    },
  ]

  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "ltr" }, [Autoplay(autoplayOptions)])

  // Update the selected index when the slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Scroll to a specific slide when a dot is clicked
  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  // Register the onSelect callback when the carousel is initialized
  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="w-full -mt-4">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselSlides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[780px] md:h-[500px] lg:h-[780px]">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-md space-y-4 text-left pl-8 md:pl-12">
                      <h2 className="text-xl md:text-2xl font-normal tracking-tighter text-black drop-shadow-sm">
                        {slide.title}
                      </h2>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black drop-shadow-sm whitespace-nowrap">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl text-black drop-shadow-sm">{slide.description1}</p>
                      <p className="text-lg md:text-xl text-black drop-shadow-sm">{slide.description2}</p>
                      <div className="pt-4">
                        <Button asChild className="bg-[#4A4A9C] text-white hover:bg-[#4A4A9C]/90">
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={`${slide.title} - ${slide.subtitle}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`w-16 h-1 rounded-full transition-colors ${
                index === selectedIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
