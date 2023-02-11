"use client"
import ChakraWrapper from "@/components/chakraWrapper"
import Footer from "@/components/footer"
import Header from "@/components/header"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      
      <body>
        <ChakraWrapper>
          <Header />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  )
}
