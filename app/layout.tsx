import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google" // Changed from Inter to Manrope
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"

const manrope = Manrope({
  // Changed from Inter to Manrope
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Added more weights for flexibility
  display: "swap", // Ensures text remains visible during font loading
})

export const metadata: Metadata = {
  title: "INNOSTUDIO",
  description: "Mastering the Art of Grooming",
    generator: 'v0.dev',
    icons: {
      icon: "/favicon.ico", // alebo "/favicon.png"
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body className={`${manrope.className} antialiased`}>
        {" "}
        {/* Applied Manrope and antialiasing */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
