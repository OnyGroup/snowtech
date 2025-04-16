"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  // promotional banners
  const promoItems = [
    {
      image: "/images/ecommerce/vacuum-cleaner.webp",
      title: "CLEAN WITH EASE",
      subtitle: "New Cordless Pro",
      description: "Powerful suction. Lightweight design. Long-lasting battery. Perfect for all surfaces.",
      buttonText: "Show deals",
      buttonLink: "/offers"
    },
    {
      image: "/images/ecommerce/solar-panels.webp",
      title: "GO GREEN",
      subtitle: "Solar Energy Solutions",
      description: "Lower your bills and carbon footprint with clean renewable energy.",
      buttonText: "Explore solar",
      buttonLink: "/home-energy"
    },
    {
      image: "/images/ecommerce/microwave.webp",
      title: "SMART KITCHEN",
      subtitle: "Connected Appliances",
      description: "Modern kitchens deserve modern technology. Control from your smartphone.",
      buttonText: "Shop now",
      buttonLink: "/home-appliances"
    }
  ];

  const autoplayOptions = {
    delay: 7000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "ltr" }, [Autoplay(autoplayOptions)]);

  return (
    <section className="w-full mb-12">
      <div className="relative overflow-hidden" ref={emblaRef}>
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
                      <p className="text-xl md:text-2xl font-medium text-black drop-shadow-sm">
                        {item.subtitle}
                      </p>
                      <p className="text-lg md:text-xl text-black drop-shadow-sm">
                        {item.description}
                      </p>
                      <div className="pt-4">
                        <Button asChild className="bg-[#4A4A9C] text-white hover:bg-[#4A4A9C]/90">
                          <Link href={item.buttonLink}>{item.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={item.image}
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
  );
}