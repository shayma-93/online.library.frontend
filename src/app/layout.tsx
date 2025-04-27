import type React from "react"
import '../styles/globals.css'; // adjust path based on your folder structure
import { Quicksand, Fredoka, Dancing_Script, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import "../styles/globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "EnchantedReads - Your Magical Digital Library",
  description: "Discover, read, and track your books in an enchanted digital realm.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  >
      <body className="light font-sans"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
