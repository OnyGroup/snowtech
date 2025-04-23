"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Package, Truck, Calendar, ArrowRight, Home, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header_ecommerce"
import FooterEcommerce from "@/components/footer_ecommerce"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || "ORD-" + Math.floor(100000 + Math.random() * 900000)
  const [currentDate] = useState(new Date())
  const [estimatedDelivery] = useState(new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000)) // 5 days from now

  // Format dates
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Mock order details
  const [orderDetails] = useState({
    items: [
      {
        name: "Snowtech Air Conditioner",
        price: 45000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80&text=AC",
      },
      {
        name: "Air Purifier Filter",
        price: 3500,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80&text=Filter",
      },
    ],
    subtotal: 52000,
    shipping: 1500,
    tax: 8320,
    total: 61820,
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#4A4A9C] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-24 w-24 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-xl mb-6">Your order has been successfully placed and confirmed.</p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-lg">
                Order Number: <span className="font-bold">{orderId}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Order Details Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Order Status */}
                <div className="bg-[#4A4A9C]/10 p-6 border-b border-[#4A4A9C]/20">
                  <h2 className="text-2xl font-bold text-[#4A4A9C] mb-4">Order Status</h2>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#4A4A9C] rounded-full p-2">
                        <Package className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Order Confirmed</p>
                        <p className="text-sm text-gray-600">{formatDate(currentDate)}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-auto h-0.5 md:h-0.5 bg-[#4A4A9C]/30"></div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#4A4A9C]/30 rounded-full p-2">
                        <Truck className="h-5 w-5 text-[#4A4A9C]" />
                      </div>
                      <div>
                        <p className="font-medium">Estimated Delivery</p>
                        <p className="text-sm text-gray-600">{formatDate(estimatedDelivery)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    {orderDetails.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 border-b pb-4">
                        <div className="relative w-20 h-20 bg-gray-100 rounded">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">
                            Quantity: {item.quantity} × KSh {item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="font-bold">KSh {(item.price * item.quantity).toLocaleString()}</div>
                      </div>
                    ))}

                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>KSh {orderDetails.subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>KSh {orderDetails.shipping.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (16% VAT)</span>
                        <span>KSh {orderDetails.tax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 font-bold">
                        <span>Total</span>
                        <span className="text-[#4A4A9C]">KSh {orderDetails.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div className="p-6 bg-gray-50 border-t">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Shipping Address</h3>
                      <p>John Doe</p>
                      <p>123 Main Street, Apartment 4B</p>
                      <p>Nairobi, Kenya 00100</p>
                      <p>Phone: +254 712 345 678</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Payment Information</h3>
                      <p>Payment Method: Credit Card</p>
                      <p>Card: **** **** **** 1234</p>
                      <p>Billing Address: Same as shipping</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-4">What's Next?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-t-4 border-t-[#4A4A9C]">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <Calendar className="h-10 w-10 text-[#4A4A9C]" />
                      </div>
                      <h3 className="font-bold text-center mb-2">Track Your Order</h3>
                      <p className="text-sm text-gray-600 text-center">
                        You will receive tracking information via email once your order ships.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-[#4A4A9C]">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <FileText className="h-10 w-10 text-[#4A4A9C]" />
                      </div>
                      <h3 className="font-bold text-center mb-2">View Order History</h3>
                      <p className="text-sm text-gray-600 text-center">
                        Check your order history and details in your account dashboard.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-[#4A4A9C]">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <Truck className="h-10 w-10 text-[#4A4A9C]" />
                      </div>
                      <h3 className="font-bold text-center mb-2">Prepare for Delivery</h3>
                      <p className="text-sm text-gray-600 text-center">
                        Make sure someone is available to receive your package on the delivery date.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#4A4A9C] hover:bg-[#4A4A9C]/90">
                  <Link href="/orders">
                    View My Orders <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  <Link href="/ecommerce">
                    <Home className="mr-2 h-4 w-4" /> Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterEcommerce />
    </div>
  )
}
