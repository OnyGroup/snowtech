import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import DictionaryProvider from "@/locales/DictionaryProvider"
import { getDictionary } from "@/locales/dictionary"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snowtech",
  description: "Snowtech Electronics Ltd. We are a leading electronics retailer in Kenya",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dictionary = await getDictionary() 

  return (
    <html lang="en">
      <body className={inter.className}>
        <DictionaryProvider dictionary={dictionary}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>
            {children}
            </CartProvider>
            <Toaster />
          </ThemeProvider>
        </DictionaryProvider>
      </body>
    </html>
  )
}