"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
  // carousel slides
  const carouselSlides = [
    {
      image: "/images/ecommerce/hero1.webp",
      title: "SPECIAL OFFER",
      subtitle: "Hot deals, No Sweat",
      description1: "Stay connected, Stay Ahead",
      description2: "and Stay Stylish",
      buttonText: "Browse offers",
      buttonLink: "/offers"
    },
    {
      image: "/images/ecommerce/hvac.webp",
      title: "COOLING SOLUTIONS",
      subtitle: "Beat the Heat",
      description1: "Stay cool with our energy-efficient",
      description2: "air conditioning systems",
      buttonText: "View HVAC products",
      buttonLink: "/residential-ac"
    },
    {
      image: "/images/ecommerce/oven.webp",
      title: "KITCHEN ESSENTIALS",
      subtitle: "Cook Like a Pro",
      description1: "Premium kitchen appliances",
      description2: "for the modern home",
      buttonText: "Explore appliances",
      buttonLink: "/home-appliances"
    }
  ];

  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "ltr" }, [Autoplay(autoplayOptions)]);

  return (
    <section className="w-full">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselSlides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[780px] md:h-[500px] lg:h-[780px]">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-md space-y-4 text-left">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black drop-shadow-sm">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl font-medium text-black drop-shadow-sm">{slide.subtitle}</p>
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
                  src={slide.image}
                  alt={`${slide.title} - ${slide.subtitle}`}
                  fill
                  className="object-contain"
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