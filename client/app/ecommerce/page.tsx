"use client"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProductList from "../StoreProductList"
import type { Product } from "@/types/types_inventory"
import Header from "@/components/header_ecommerce"
import { Skeleton } from "@/components/ui/skeleton"
import FooterEcommerce from "@/components/footer_ecommerce"
import { HeroCarousel } from "@/components/hero-carousel"
import { PromoBanner } from "@/components/promo-banner"
import { FeaturedProducts } from "@/components/featured-products"
import { ModernLivingSection } from "@/components/modern-living-section"
import { AppliancesShowcase } from "@/components/appliances-showcase"
import { ResidentialACShowcase } from "@/components/residential-ac-showcase"
import { HomeEnergyShowcase } from "@/components/home-energy-showcase"
import { SnowCareSupport } from "@/components/snow-care-support"

export default function ProductsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("price") // Default to ascending price
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `${API_BASE_URL}store/products/?page=${currentPage}&ordering=${sortBy}`
        if (searchTerm) {
          url += `&search=${searchTerm}`
        }
        console.log("API Request URL:", url) // Log the API request URL
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        console.log("Fetched Products:", response.data) // Log the raw response
        // Extract the 'results' field from the paginated response
        setProducts(response.data.results || [])
      } catch (error) {
        console.error("Failed to fetch products", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [currentPage, searchTerm, sortBy])

  // Function to update the page number in the URL
  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`, { scroll: false })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Include the Header component - the promo banner and secondary nav are now in layout.tsx */}
      <Header onSearch={setSearchTerm} />

      <div className="flex flex-col">
        <div className="-mt-6">
          <HeroCarousel />
        </div>
        {/* Add a white space separator by adding margin-top (mt-8) to each section after the first one */}
        <div className="mt-8 bg-white">
          <PromoBanner />
        </div>
        <div className="mt-8 bg-white">
          <FeaturedProducts />
        </div>
        <div className="mt-8 bg-white">
          <ModernLivingSection />
        </div>
        <div className="mt-8 bg-white">
          <AppliancesShowcase />
        </div>
        <div className="mt-8 bg-white">
          <ResidentialACShowcase />
        </div>
        <div className="mt-8 bg-white">
          <HomeEnergyShowcase />
        </div>
        <div className="mt-8 bg-white">
          <SnowCareSupport />
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto text-center pt-16">
        <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-6">Brands we work with</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {productImages.map((src, index) => (
              <CarouselItem key={index} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/7">
                <div className="p-2">
                  <Card className="shadow-none border-none bg-transparent">
                    <CardContent className="flex items-center justify-center h-48 p-6">
                      <div className="relative w-full h-full max-h-32">
                        <Image
                          src={src || "/placeholder.svg"}
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

      <div className="container mx-auto p-4 flex-grow">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price: Low to High</SelectItem>
              <SelectItem value="-price">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product List */}
        <div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <Skeleton className="w-full h-40 mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <div>No products available.</div>
          )}
        </div>

        {/* Pagination */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${Math.max(currentPage - 1, 1)}`}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(Math.max(currentPage - 1, 1))
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`?page=${currentPage}`}>{currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={`?page=${currentPage + 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(currentPage + 1)
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Footer */}
      <FooterEcommerce />
    </div>
  )
}
