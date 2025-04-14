"use client"

import React, { useState } from "react"

import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/roofing-service-commercial.webp?height=1200&width=470"
            alt="Contact Us Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl">
              Reach out to us via phone, email, or visit our office to discuss how we can help you with your electrical
              and electronic HVAC requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#4A4A9C] mb-6">Ready to get started?</h2>
                <p className="text-gray-700 text-lg mb-8">
                  Whether you prefer to reach us by phone, email, or in person, we are here to assist you and provide
                  expert advice tailored to your needs. Let us help you with your electrical and electronic HVAC
                  requirements and discover why Snowtech Electronics is the right choice for your next project.
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#4A4A9C] mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-600">11 Rosewood Avenue | Kilimani</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#4A4A9C] mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+254722384322" className="hover:text-[#4A4A9C]">
                          +254722384322
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#4A4A9C] mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@snowtech.co.ke" className="hover:text-[#4A4A9C]">
                          info@snowtech.co.ke
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[#4A4A9C] mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">We are Open</h3>
                      <p className="text-gray-600">Mon to Fri: 8AM-5PM</p>
                      <p className="text-gray-600">Sat: 9AM-2PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-t-4 border-t-[#4A4A9C]">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been sent successfully. We&apos;ll get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-2xl font-bold text-[#4A4A9C] mb-4">Send Us a Message</h3>

                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Your email" required />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="service">Service Required</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General enquiries</SelectItem>
                              <SelectItem value="hvac">HVAC system installation</SelectItem>
                              <SelectItem value="cctv">CCTV installation</SelectItem>
                              <SelectItem value="electrical">Electrical works</SelectItem>
                              <SelectItem value="cabling">Structured cabling</SelectItem>
                              <SelectItem value="power">Power backup solutions</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your project or inquiry"
                            className="min-h-[120px]"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-[#4A4A9C] hover:bg-[#3A3A8C]" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#4A4A9C]">Find Us</h2>
            <p className="text-gray-700 mt-2">Visit our office at 11 Rosewood Avenue, Kilimani</p>
          </div>
          
          <div className="w-full h-96 shadow-lg rounded-lg overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7874218547566!2d36.791506376391124!3d-1.2880014990631842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10833fe0f8bd%3A0x47bd4f4a6f85a832!2sSnowtech%20Electronics%20Limited!5e0!3m2!1sen!2sus!4v1649327809461!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Snowtech Electronics Location"
            ></iframe>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              className="bg-[#4A4A9C] hover:bg-[#3A3A8C] text-white"
              asChild
            >
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=-1.288001,36.793695&destination_place_id=5167809828455806914&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Navigation className="h-5 w-5" />
                Get Directions to Our Office
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}