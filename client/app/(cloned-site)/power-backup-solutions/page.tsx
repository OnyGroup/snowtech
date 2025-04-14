import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Zap, Battery, Sun, Database, GitBranch, PenToolIcon as Tool } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PowerBackupSolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/power-backup/power-backup.webp"
            alt="Power Backup Solutions Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Power Backup Solutions</h1>
            <p className="text-xl md:text-2xl">
              At SnowTech Electronics, we understand the critical importance of uninterrupted power supply for both
              residential and commercial properties. Power outages can disrupt operations, compromise safety, and result
              in costly downtime. That&apos;s why we offer reliable and efficient power backup solutions to keep your lights
              on and your systems running, even during emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Image
                src="/images/power-backup/ups.webp"
                alt="Power Backup Solutions"
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">Get Professional Power Backup</h2>
              <p className="text-gray-700 text-lg">
                At SnowTech Electronics, we are committed to providing dependable and cost-effective power backup
                solutions to protect your property, assets, and operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-[#4A4A9C] rounded-full p-2 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Generator Installation</h3>
                    <p className="text-gray-700">
                      We supply and install reliable generators for homes and businesses of all sizes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#4A4A9C] rounded-full p-2 mt-1">
                    <Battery className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">UPS Systems Installation</h3>
                    <p className="text-gray-700">
                      Protect sensitive equipment and ensure continuous operation with our UPS solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#4A4A9C] rounded-full p-2 mt-1">
                    <Sun className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Solar Solutions</h3>
                    <p className="text-gray-700">
                      Harness renewable energy with our solar power systems for sustainable backup power.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#4A4A9C] rounded-full p-2 mt-1">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Energy Storage Systems</h3>
                    <p className="text-gray-700">
                      Store excess power for use during outages with advanced battery storage solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#4A4A9C] rounded-full p-2 mt-1">
                    <GitBranch className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Automatic Transfer Switches (ATS)</h3>
                    <p className="text-gray-700">
                      Seamlessly switch between power sources with our automatic transfer switch installations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#4A4A9C] rounded-full p-2 mt-1">
                    <Tool className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Maintenance and Monitoring</h3>
                    <p className="text-gray-700">
                      Keep your power backup systems in optimal condition with our maintenance services.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Why Choose Our Power Backup Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#4A4A9C]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-[#4A4A9C]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A4A9C]">Reliable Performance</h3>
              <p className="text-gray-700">
                Our power backup solutions are designed to provide dependable performance when you need it most,
                ensuring minimal disruption to your operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#4A4A9C]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <Tool className="h-8 w-8 text-[#4A4A9C]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A4A9C]">Expert Installation</h3>
              <p className="text-gray-700">
                Our team of certified technicians ensures proper installation and configuration of all power backup
                systems for optimal performance and safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#4A4A9C]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <Sun className="h-8 w-8 text-[#4A4A9C]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A4A9C]">Sustainable Options</h3>
              <p className="text-gray-700">
                We offer eco-friendly power backup solutions, including solar power systems, to help reduce your carbon
                footprint while ensuring reliable backup power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/nairobi-skyline.webp" alt="CTA Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="md:max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need A Free Estimate?</h2>
            <p className="text-xl mb-8">
              Ready to get started or have questions about our services? Contact Snowtech Electricals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                <Link href="/contact">
                  Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
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
