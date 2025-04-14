import Link from "next/link"
import Image from "next/image"
import { Shield, Camera, Lock, Bell, AlertTriangle, Zap, ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SecuritySystemsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/security-systems/security-camera.webp"
            alt="Security Systems Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Indigo overlay on the left side only */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#4A4A9C] to-transparent" />

        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Electronic Security Systems Installation
            </h1>
            <p className="text-xl md:text-2xl">
              Welcome to Snowtech Electricals&apos; Electronic Security Systems Installation services, where safety meets
              peace of mind. We specialize in designing, installing, and maintaining state-of-the-art security systems
              to protect your property, assets, and loved ones.
            </p>
          </div>
        </div>
      </section>



      {/* Services Grid Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Our Electronic Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security Systems */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Shield className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4A4A9C] text-center">Security Systems</h3>
                <p className="text-gray-700">
                  With a focus on cutting-edge technology and personalized solutions, we offer comprehensive security
                  solutions tailored to your specific needs.
                </p>
              </CardContent>
            </Card>

            {/* CCTV Installation */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Camera className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4A4A9C] text-center">CCTV Installation</h3>
                <p className="text-gray-700">
                  Our experts will assess your property&apos;s security requirements and design a customized CCTV system that
                  provides comprehensive coverage and maximum visibility.
                </p>
              </CardContent>
            </Card>

            {/* Access Control Systems */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Lock className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4A4A9C] text-center">Access Control Systems</h3>
                <p className="text-gray-700">
                  Control and monitor access to your property with our advanced access control systems. Whether you need
                  to restrict access to specific areas or manage multiple entry points.
                </p>
              </CardContent>
            </Card>

            {/* Intrusion Detection Systems */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <AlertTriangle className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4A4A9C] text-center">Intrusion Detection Systems</h3>
                <p className="text-gray-700">
                  We offer a range of intrusion detection devices that provide reliable security coverage for homes,
                  offices, warehouses, and more, from motion sensors to glass break detectors.
                </p>
              </CardContent>
            </Card>

            {/* Alarm Systems */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Bell className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4A4A9C] text-center">Alarm Systems</h3>
                <p className="text-gray-700">
                  Whether you need a basic burglar alarm or a fully integrated security system with fire detection and
                  emergency notification capabilities, we have the expertise to design and install a solution that meets
                  your needs.
                </p>
              </CardContent>
            </Card>

            {/* Electric Fence */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Zap className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#4A4A9C] text-center">Electric Fence</h3>
                <p className="text-gray-700">
                  Our Security Electric Fences are constructed using specialised equipment and built for perimeter
                  security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/security-systems/nairobi-skyline.webp" alt="CTA Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Need A Free Estimate?</h2>
            <p className="text-xl">
              Ready to get started or have questions about our services? Contact Snowtech Electricals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
