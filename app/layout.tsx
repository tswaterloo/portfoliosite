import type { Metadata } from "next"
import "./globals.css"

const description = "Electrical engineering at the University of Waterloo. Trading, ML, and systems."

export const metadata: Metadata = {
  metadataBase: new URL("https://tanushshah.vercel.app"),
  title: "Tanush Shah",
  description,
  openGraph: {
    title: "Tanush Shah",
    description,
    url: "/",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
