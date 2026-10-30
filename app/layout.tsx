import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tanush Shah",
  description: "Electrical engineering at the University of Waterloo. Trading, ML, and systems.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
