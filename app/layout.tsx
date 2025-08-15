import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "FA Editorial - IPES FA",
  description: "Explora las publicaciones editoriales y contenido especializado de la institución",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#E6D690",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FA Editorial",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/fa-editorial-logo.png",
    apple: "/fa-editorial-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://fa-editorial.vercel.app",
    title: "FA Editorial - IPES FA",
    description: "Explora las publicaciones editoriales y contenido especializado de la institución",
    siteName: "FA Editorial",
  },
  twitter: {
    card: "summary_large_image",
    title: "FA Editorial - IPES FA",
    description: "Explora las publicaciones editoriales y contenido especializado de la institución",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FA Editorial" />
        <meta name="application-name" content="FA Editorial" />
        <meta name="msapplication-TileColor" content="#E6D690" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="font-poppins">{children}</body>
    </html>
  )
}
