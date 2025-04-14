"use client"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "@/components/ui/card"

interface ProjectGalleryCarouselProps {
  images: { src: string; alt: string }[]
}

export default function ProjectGalleryCarousel({ images }: ProjectGalleryCarouselProps) {
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, align: "start" }, [
    Autoplay(autoplayOptions),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_30%] pl-4 min-w-0">
            <div className="p-1">
              <Card>
                <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
