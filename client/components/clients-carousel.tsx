"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

interface ClientsCarouselProps {
  images: { src: string; alt: string }[]
}

export default function ClientsCarousel({ images }: ClientsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay(autoplayOptions)])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0">
            <div className="relative aspect-[785/552] w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === selectedIndex ? "bg-[#4A4A9C]" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
