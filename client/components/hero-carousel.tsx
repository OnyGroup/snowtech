"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "ltr" }, [Autoplay(autoplayOptions)]);

  return (
    <section className="w-full">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[780px] md:h-[500px] lg:h-[780px]">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-md space-y-4 text-center">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black drop-shadow-sm">
                        SPECIAL OFFER
                      </h2>
                      <p className="text-xl md:text-2xl font-medium text-black drop-shadow-sm">Hot deals, No Sweat</p>
                      <p className="text-lg md:text-xl text-black drop-shadow-sm">Stay connected, Stay Ahead</p>
                      <p className="text-lg md:text-xl text-black drop-shadow-sm">and Stay Stylish</p>
                      <div className="pt-4">
                        <Button asChild className="bg-[#4A4A9C] text-white hover:bg-[#4A4A9C]/90">
                          <Link href="/products">Browse offers</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={`/images/ecommerce/hero1.webp?height=500&width=1920&text=Special+Offer+${index + 1}`}
                  alt={`Special Offer ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
                {/* Removed the overlay div */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}