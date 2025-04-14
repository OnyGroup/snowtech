import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Network, FileText, CheckCircle, Cable, FileSpreadsheet, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function OfficeSolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/office-solutions/scaling-networking.webp"
            alt="Office Solutions Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Structured Cabling and Networking Solutions</h1>
            <p className="text-xl md:text-2xl">
              Our structured cabling services are designed to provide a solid foundation for your data, voice, and
              multimedia communication networks. With a focus on efficiency, scalability, and performance, we offer
              comprehensive structured cabling solutions tailored to meet the demands of modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">
                Get Professional Structured Cabling and Data Networking Services
              </h2>
              <p className="text-gray-700 text-lg">
                Experience the difference with Snowtech Electricals and discover how our structured cabling solutions
                can enhance the connectivity and efficiency of your business. Contact us today to schedule a
                consultation and learn more about our comprehensive cabling services.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-[#4A4A9C] hover:bg-[#3A3A8C]">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-[#4A4A9C] text-white p-8 rounded-lg overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
                  <Image
                    src="/images/office-solutions/connection-data.webp"
                    alt="Cabling Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Our Structured Cabling Services Include:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Network className="h-6 w-6 shrink-0 mt-0.5" />
                      <span>Design and Consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cable className="h-6 w-6 shrink-0 mt-0.5" />
                      <span>Installation and Deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 mt-0.5" />
                      <span>Network Testing and Certification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-6 w-6 shrink-0 mt-0.5" />
                      <span>Cable Management and Labeling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileSpreadsheet className="h-6 w-6 shrink-0 mt-0.5" />
                      <span>Documentation and As-Built Drawings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Settings className="h-6 w-6 shrink-0 mt-0.5" />
                      <span>Maintenance and Monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">
            Benefits of Professional Structured Cabling
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#4A4A9C]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <Network className="h-8 w-8 text-[#4A4A9C]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A4A9C]">Improved Network Performance</h3>
              <p className="text-gray-700">
                A well-designed structured cabling system minimizes downtime and ensures optimal network performance,
                allowing your business to operate more efficiently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#4A4A9C]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <ArrowRight className="h-8 w-8 text-[#4A4A9C]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A4A9C]">Scalability and Flexibility</h3>
              <p className="text-gray-700">
                Our structured cabling solutions are designed to accommodate future growth and technological changes,
                providing a flexible infrastructure that can evolve with your business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#4A4A9C]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-[#4A4A9C]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A4A9C]">Reduced Maintenance Costs</h3>
              <p className="text-gray-700">
                A properly installed and organized cabling system is easier to manage and maintain, reducing
                troubleshooting time and maintenance costs in the long run.
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
                <a href="tel:+254722384322">
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
