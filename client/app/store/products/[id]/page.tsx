"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header_ecommerce"
import FooterEcommerce from "@/components/footer_ecommerce"
import Image from "next/image"
import type { Product } from "@/types/types_inventory"
import { useCart } from "@/components/CartContext"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Truck, Shield, ArrowLeft, Star, Minus, Plus } from "lucide-react"

export default function ProductDetails() {
  const { id } = useParams() // Get product ID from dynamic route
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const { updateCartCount } = useCart()
  const { toast } = useToast()
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  useEffect(() => {
    if (!id) return

    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}store/products/${id}/`)
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching product details", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductDetails()
  }, [id])

  // Function to add the product to the cart
  const handleAddToCart = async () => {
    if (!product) return

    try {
      const response = await axios.post(
        `${API_BASE_URL}store/carts/add/`,
        { product_id: product.id, quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      )

      const cartId = response.data.id

      // Fetch updated cart total items
      const cartItemsResponse = await axios.get(`${API_BASE_URL}store/carts/${cartId}/total-items/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })

      // Update cart count in context
      updateCartCount(cartItemsResponse.data.total_items)

      // Show success toast
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart!`,
        variant: "default",
      })
    } catch (error) {
      console.error("Failed to add item to cart", error)

      // Show error toast
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto py-8 px-4 md:px-6 flex-grow">
        {/* Back button */}
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2 hover:bg-gray-100"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Button>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="w-full aspect-square rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        ) : product ? (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={
                    product.images && product.images.length > 0
                      ? product.images[selectedImage]?.image_url
                      : "/placeholder.svg?height=600&width=600&text=Product+Image"
                  }
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`relative w-20 h-20 border-2 rounded ${
                        selectedImage === index ? "border-blue-600" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image.image_url || "/placeholder.svg"}
                        alt={`${product.name} - view ${index + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              <div className="text-sm text-gray-500">{product.category_name}</div>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < (product.rating || 4) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating || 4}/5 ({product.reviews_count || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {product.price ? `KSh ${product.price.toLocaleString()}` : "Price unavailable"}
                </span>
                {product.original_price && product.price && product.original_price > product.price && (
                  <span className="text-lg text-gray-500 line-through">
                    KSh {product.original_price.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700">{product.description}</p>

              {/* Product Attributes */}
              <div className="grid grid-cols-2 gap-4">
                {product.size && (
                  <div>
                    <span className="text-sm text-gray-500">Size</span>
                    <p>{product.size}</p>
                  </div>
                )}
                {product.color && (
                  <div>
                    <span className="text-sm text-gray-500">Color</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: product.color }}
                      />
                      <span>{product.color}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleAddToCart} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>

                <Button variant="outline" className="flex-1" onClick={() => setIsFavorite(!isFavorite)}>
                  <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  {isFavorite ? "Saved" : "Save for Later"}
                </Button>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-gray-500" />
                  <span>Free shipping on orders over KSh 5,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <span>1 year warranty included</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
            <p className="text-gray-600 mt-2">The product you're looking for doesn't exist or has been removed.</p>
            <Button className="mt-6" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        )}

        {/* Product Details Tabs */}
        {product && (
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="p-6 bg-white rounded-lg border">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">About this product</h3>
                  <p>{product.description || "No detailed description available for this product."}</p>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="p-6 bg-white rounded-lg border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                    <table className="w-full">
                      <tbody>
                        {product.size && (
                          <tr className="border-b">
                            <td className="py-2 text-gray-600">Size</td>
                            <td className="py-2 font-medium">{product.size}</td>
                          </tr>
                        )}
                        {product.color && (
                          <tr className="border-b">
                            <td className="py-2 text-gray-600">Color</td>
                            <td className="py-2 font-medium">{product.color}</td>
                          </tr>
                        )}
                        {product.weight && (
                          <tr className="border-b">
                            <td className="py-2 text-gray-600">Weight</td>
                            <td className="py-2 font-medium">{product.weight} kg</td>
                          </tr>
                        )}
                        {product.category_name && (
                          <tr className="border-b">
                            <td className="py-2 text-gray-600">Category</td>
                            <td className="py-2 font-medium">{product.category_name}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Package Contents</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>1 x {product.name}</li>
                      <li>User Manual</li>
                      <li>Warranty Card</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="p-6 bg-white rounded-lg border">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>

                  {product.reviews_count && product.reviews_count > 0 ? (
                    <div className="space-y-6">
                      {/* This would be populated with actual reviews from your API */}
                      <Card className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="font-medium">Great product!</p>
                        <p className="text-gray-600 mt-1">
                          This product exceeded my expectations. The quality is excellent and it works perfectly.
                        </p>
                        <div className="text-sm text-gray-500 mt-2">John D. - 2 weeks ago</div>
                      </Card>
                    </div>
                  ) : (
                    <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>

      <FooterEcommerce />
    </div>
  )
}
