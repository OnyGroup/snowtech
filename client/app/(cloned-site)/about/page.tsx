import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Eye, Send, Handshake, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

  export default function AboutPage() {
    const teamMembers = [
      {
        name: "Parwizali Kassam",
        title: "Chairman",
        image: "/images/team/kassam.webp",
      },
      {
        name: "Hamza Parwez",
        title: "Director",
        image: "/images/team/hamza.webp",
      },
      {
        name: "Imran Sokwala",
        title: "COO",
        image: "/images/team/imran.webp",
      },
      {
        name: "Fashtein Mutunga",
        title: "Accounts Officer",
        image: "/images/team/mutunga.webp",
      },
      {
        name: "Ali Hashim",
        title: "Technical Officer",
        image: "/images/team/ali.webp",
      },
      {
        name: "Yasmin Mwinyi",
        title: "Admin & Marketing",
        image: "/images/team/yasmin.webp",
      },
    ];

    const productImages = [
      "/images/company-logos/samsung.webp",
      "/images/company-logos/lg.webp",
      "/images/company-logos/panasonic.webp",
      "/images/company-logos/bruhm.webp",
      "/images/company-logos/hik-vision.webp",
      "/images/company-logos/snowtech.webp",
      "/images/company-logos/toshiba.webp",
      "/images/company-logos/zk-software.webp",
      "/images/company-logos/zkteco.webp",
    ]    

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-[#4A4A9C] text-white py-16 md:py-24">
      <div className="absolute inset-0 opacity-20">
        <img src="/images/hvac-view.webp" alt="HVAC view from rooftop" className="w-full h-full object-cover" />
      </div>
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">About Snowtech Electronics</h1>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                We Are Leading provider of electrical and electronic HVAC systems in Kenya
              </h2>
              <p className="text-lg">
                SnowTech Electronics, established in 2008, is a medium-sized company specializing in electrical and
                electronics HVAC systems. Originally focused on Daewoo Home Appliances, we have expanded our portfolio
                to include:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Electronic Security</li>
                <li>Office Solutions</li>
                <li>HVAC Systems</li>
                <li>Power Backup Solutions</li>
              </ul>
              <div>
                <Button asChild variant="outline" className="border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-[#4A4A9C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Our Goal</h3>
                    <p className="text-white">
                      We aim at becoming a preferred contractor in providing state of the art electrical/electronic
                      technology solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#4A4A9C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Vision</h3>
                    <p className="text-white">
                      We strive to be the best-in-class distributors of quality product and services and a responsible
                      corporate citizen.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    <Send className="h-6 w-6 text-[#4A4A9C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Mission</h3>
                    <p className="text-white">
                      To be the leading provider of innovative and high quality electronic systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/NCA4-Cert.webp"
                  alt="Recognition Certificate"
                  width={845}
                  height={451}
                  className="rounded-lg shadow-lg w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">Awards & Achievements</h2>
              <p className="text-gray-700 text-lg">
                Snowtech Electronics Ltd is a registered NCA4 Electrical Engineering Service Contractor dealing with all
                major Electrical Installations and we are also a registered NCA4 Mechanical Engineering Service
                Contractor.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#4A4A9C]" />
                  <span>NCA4 Electrical Engineering Service Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#4A4A9C]" />
                  <span>NCA4 Mechanical Engineering Service Contractor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Products Carousel Section */}
      <section className="w-full bg-[#F5F5F5] py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Our Products</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
            {productImages.map((src, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-2">
                  <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex items-center justify-center h-48 p-6">
                    <div className="relative w-full h-full max-h-32">
                      <Image
                        src={src}
                        alt={`Product ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-[#4A4A9C]">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full bg-[#4A4A9C] text-white py-16 relative">
        {/* Background placeholder image */}
        <div className="absolute inset-0 opacity-20">
          <img src="/images/nairobi-skyline.webp" alt="nairobi skyline image" className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-left space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Talk About Your Next Project</h2>
            <p className="text-xl">
              Ready to get started or have questions about our services? Contact Snowtech Electricals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                <Link href="/contact">
                  Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                <a href="tel:+254722384322">
                  <Phone className="mr-1.5 h-5 w-5" />
                Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
