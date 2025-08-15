"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  const menuItems = [
    { name: "Inicio", href: "/fa-editorial" },
    { name: "Quienes somos", href: "/fa-editorial/quienes-somos" },
    { name: "Catálogo", href: "/fa-editorial/catalogo" },
    { name: "Colecciones", href: "/fa-editorial/colecciones" },
    { name: "Envío de proyectos", href: "/fa-editorial/envio-proyectos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/fa-editorial" className="flex items-center space-x-3">
            <Image
              src="/fa-blanco2.png"
              alt="FA Editorial Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-light text-xl text-[#E6D690] tracking-wide">EDITORIAL</span>
          </Link>

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

          <div className="flex items-center">
            <button className="text-gray-300 hover:text-[#E6D690] transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
