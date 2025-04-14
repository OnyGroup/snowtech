import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Services Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl">
              At Snowtech Electronics, we offer a comprehensive range of services to meet all your electrical and HVAC
              needs. Explore our specialized services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-24">
            {/* HVAC System Supply and Installation */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=512&width=912&text=HVAC+Systems"
                  alt="HVAC System Supply and Installation"
                  width={912}
                  height={512}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="text-3xl font-bold text-[#4A4A9C]">HVAC System Supply and Installation</h2>
                <p className="text-gray-700 text-lg">
                  Keep your indoor environment comfortable and energy-efficient with our top-of-the-line HVAC systems.
                  Whether it&apos;s heating, ventilation, or air conditioning, we provide reliable solutions for residential,
                  commercial, and industrial applications.
                </p>
                <Button asChild variant="outline" className="border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  <Link href="/services/hvac">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Structured Cabling & Data Networking */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=512&width=912&text=Structured+Cabling"
                  alt="Structured Cabling & Data Networking"
                  width={912}
                  height={512}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="text-3xl font-bold text-[#4A4A9C]">Structured Cabling & Data Networking</h2>
                <p className="text-gray-700 text-lg">
                  Streamline your communication networks with our structured cabling solutions. Whether you need data,
                  voice, or video cabling, our experts will design and install a reliable infrastructure to support your
                  business operations.
                </p>
                <Button asChild variant="outline" className="border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  <Link href="/services/cabling">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Power Backup Solutions */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=512&width=912&text=Power+Backup"
                  alt="Power Backup Solutions"
                  width={912}
                  height={512}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="text-3xl font-bold text-[#4A4A9C]">Power Backup Solutions</h2>
                <p className="text-gray-700 text-lg">
                  Stay prepared for unexpected power outages with our power backup systems. From generators to UPS
                  installations, we offer reliable backup solutions to keep your operations running smoothly.
                </p>
                <Button asChild variant="outline" className="border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  <Link href="/services/power-backup">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Electronic Security Solutions */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=512&width=912&text=Electronic+Security"
                  alt="Electronic Security Solutions"
                  width={912}
                  height={512}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="text-3xl font-bold text-[#4A4A9C]">Electronic Security Solutions</h2>
                <p className="text-gray-700 text-lg">
                  Safeguard your property with cutting-edge electronic security solutions. From CCTV installations to
                  access control systems, we provide robust security solutions tailored to your requirements.
                </p>
                <Button asChild variant="outline" className="border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  <Link href="/services/security">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Working Process Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Working Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">01.</div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p>
                  Our process begins with an in-depth consultation to understand your unique needs, preferences, and
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">02.</div>
                <h3 className="text-xl font-bold mb-3">Proposal</h3>
                <p>
                  We will prepare a detailed proposal outlining our recommended solutions, scope of work, timeline, and
                  pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">03.</div>
                <h3 className="text-xl font-bold mb-3">Installation</h3>
                <p>
                  Once the proposal is approved, our skilled technicians will proceed with the installation phase of the
                  project.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">04.</div>
                <h3 className="text-xl font-bold mb-3">Inspection</h3>
                <p>
                  Conduct a thorough inspection to ensure that all systems are functioning optimally and meet the
                  highest standards of safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">Some of our clients</h2>
              <p className="text-gray-700 text-lg">
                We are proud to have worked with a diverse range of clients to actualize their needs within budget.
              </p>
              <Button asChild className="bg-[#4A4A9C] hover:bg-[#3A3A8C]">
                <Link href="/portfolio">Our Portfolio</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=481&width=840&text=Our+Clients"
                alt="Our Clients"
                width={840}
                height={481}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=400&width=1600" alt="CTA Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Need A Free Estimate?</h2>
            <p className="text-xl">
              Ready to get started or have questions about our services? Contact SnowTech today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
                <a href="tel:+254700000000">
                  <Phone className="mr-2 h-5 w-5" /> Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
