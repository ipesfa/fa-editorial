"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

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
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo y marca */}
          <Link href="/fa-editorial" className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/fa-blanco2.png"
              alt="FA Editorial Logo"
              width={32}
              height={32}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
            />
            <span className="font-light text-base sm:text-lg md:text-xl text-[#E6D690] tracking-wide">EDITORIAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Botón de búsqueda para móvil */}
            <button className="text-gray-300 hover:text-[#E6D690] transition-colors duration-200 lg:hidden p-2">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Botón de menú hamburguesa */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-[#E6D690] transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Mejorado */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-black/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-[#E6D690] hover:bg-gray-800/50 transition-all duration-200 text-base font-medium tracking-wide py-3 px-3 rounded-lg"
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
