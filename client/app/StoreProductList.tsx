"use client"
import { useRouter } from "next/navigation"
import type React from "react"

import ProductCard from "./StoreProductCard"
import type { Product } from "@/types/types_inventory"
import { useCart } from "@/components/CartContext"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  const router = useRouter()
  const { updateCartCount } = useCart()
  const { toast } = useToast()
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  const handleAddToCart = async (productId: number, event: React.MouseEvent) => {
    event.stopPropagation() // Prevents navigating when clicking 'Add to Cart'
    try {
      // First add the item to cart
      const response = await axios.post(
        `${API_BASE_URL}store/carts/add/`,
        { product_id: productId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      )

      // Get the cart ID from the response
      const cartId = response.data.id

      // Get the total items using the correct endpoint
      const cartItemsResponse = await axios.get(`${API_BASE_URL}store/carts/${cartId}/total-items/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })

      // Update the cart count with the total_items value
      updateCartCount(cartItemsResponse.data.total_items)

      // Show success toast
      toast({
        title: "Added to cart",
        description: "Product has been added to your cart",
        variant: "default",
      })
    } catch (error) {
      console.error("Failed to add item to cart", error)
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative h-full">
          {/* Product Card */}
          <div onClick={() => router.push(`/store/products/${product.id}`)}>
            <ProductCard product={product} />
          </div>

          {/* Quick Action Buttons - Appear on Hover */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={(e) => handleAddToCart(product.id, e)}
              size="sm"
              className="bg-white text-black hover:bg-gray-100 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              title="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>

            <Button
              onClick={(e) => {
                e.stopPropagation()
                router.push(`/store/products/${product.id}`)
              }}
              size="sm"
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              title="Quick view"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
