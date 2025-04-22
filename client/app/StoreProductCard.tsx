"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import type { Product } from "@/types/types_inventory"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  // Calculate discount percentage if there's an original price
  const hasDiscount = product.original_price && product.price && product.original_price > product.price
  const discountPercentage =
    hasDiscount && product.original_price && product.price
      ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
      : 0

  return (
    <Card
      className="overflow-hidden border border-gray-200 rounded-lg transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Badges */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0]?.image_url || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=300&width=300&text=Product+Image"
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">No image</span>
          </div>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white font-medium px-2 py-1">
            -{discountPercentage}%
          </Badge>
        )}

        {/* New Badge - if product is less than 30 days old */}
        {product.created_at &&
          (new Date().getTime() - new Date(product.created_at).getTime()) / (1000 * 3600 * 24) < 30 && (
            <Badge className="absolute top-2 right-2 bg-blue-500 text-white font-medium px-2 py-1">NEW</Badge>
          )}

        {/* Wishlist Button */}
        <button
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-500 opacity-70 hover:opacity-100"
          }`}
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <div className="text-xs text-gray-500 mb-1">{product.category_name}</div>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < (product.rating || 4) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews_count || 0})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            {product.price ? `KSh ${product.price.toLocaleString()}` : "Price unavailable"}
          </span>
          {hasDiscount && product.original_price && (
            <span className="text-sm text-gray-500 line-through">KSh {product.original_price.toLocaleString()}</span>
          )}
        </div>

        {/* Availability */}
        {product.inventory_count !== undefined && (
          <div className="mt-2">
            {product.inventory_count > 0 ? (
              <span className="text-xs text-green-600">In Stock</span>
            ) : (
              <span className="text-xs text-red-600">Out of Stock</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
