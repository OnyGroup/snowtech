"use client"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function ClientGalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{/* This div is filled with content from the parent component */}</div>
    </div>
  )
}
