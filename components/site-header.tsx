"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Inicio", href: "/fa-editorial" },
    { name: "Quienes somos", href: "/fa-editorial/quienes-somos" },
    { name: "Catálogo", href: "/fa-editorial/catalogo" },
    { name: "Colecciones", href: "/fa-editorial/colecciones" },
    { name: "Envío de proyectos", href: "/fa-editorial/envio-proyectos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/fa-editorial" className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/fa-blanco2.png"
              alt="FA Editorial Logo"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="font-light text-lg sm:text-xl text-[#E6D690] tracking-wide">EDITORIAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#E6D690] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-[#E6D690] transition-colors duration-200 md:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-[#E6D690] transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <nav className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-[#E6D690] transition-colors duration-200 text-base font-medium tracking-wide py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
