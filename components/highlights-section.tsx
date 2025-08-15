"use client"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Globe, Sparkles, Download } from "lucide-react"
import { libros } from "@/data/libros"

export function HighlightsSection() {
  // Obtener la última publicación (el libro más reciente)
  const latestBook = libros[0] // Asumiendo que el primer libro es el más reciente

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-12 sm:py-16 lg:py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6D690]/10 to-transparent"></div>
      <div className="absolute top-10 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#E6D690]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-gray-200/40 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight">Última edición</h2>
          </div>

          {/* Layout optimizado para móvil */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Columna izquierda: Portada mejorada */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] mx-auto lg:mx-0">
                <div className="relative group cursor-pointer">
                  <div className="aspect-[3/4] relative bg-white border border-gray-200/50 rounded-lg shadow-lg z-30 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:rotate-1 sm:group-hover:rotate-3 overflow-hidden">
                    <Image
                      src={latestBook.portada}
                      alt={`Portada de ${latestBook.titulo}`}
                      width={350}
                      height={467}
                      className="w-full h-full object-cover"
                      priority
                    />
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Capas de sombra mejoradas para móvil */}
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-full aspect-[3/4] bg-gray-100/80 border border-gray-100 rounded-lg z-20 transition-all duration-500 group-hover:top-2 group-hover:left-2 sm:group-hover:top-4 sm:group-hover:left-4 group-hover:rotate-1"></div>
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-full aspect-[3/4] bg-gray-200/60 border border-gray-200 rounded-lg z-10 transition-all duration-500 group-hover:top-4 group-hover:left-4 sm:group-hover:top-8 sm:group-hover:left-8 group-hover:-rotate-1"></div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Información mejorada */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[#E6D690] text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full">
                  NUEVA PUBLICACIÓN
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E6D690] rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight">
                  {latestBook.titulo}
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl text-justify">{latestBook.resumen}</p>
              </div>

              <div className="pt-2">
                <p className="text-gray-900 font-medium text-lg sm:text-xl">{latestBook.autores.join(", ")}</p>
              </div>

              {/* Grid de información optimizado para móvil */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E6D690]/20 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4C078]" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm font-medium">Idioma</span>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Español</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E6D690]/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4C078]" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm font-medium">Año</span>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">{latestBook.anio}</p>
                  </div>
                </div>
                {latestBook.coleccion && (
                  <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E6D690]/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4C078]" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs sm:text-sm font-medium">Colección</span>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{latestBook.coleccion}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Botones optimizados para móvil */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                <Link
                  href={`/fa-editorial/libro/${latestBook.id}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 border shadow-xs h-11 sm:h-12 has-[&>svg]:px-4 border-black text-black hover:bg-[#E6D690] hover:border-[#E6D690] hover:text-black transition-all duration-300 px-6 sm:px-8 py-3 text-sm sm:text-base bg-transparent rounded-none tracking-wide hover:shadow-lg hover:-translate-y-0.5"
                >
                  Ver detalles
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                
                {latestBook.openAccess && latestBook.formatos && (
                  <Link
                    href={latestBook.formatos[0].url}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 border shadow-xs h-11 sm:h-12 has-[&>svg]:px-4 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 px-6 sm:px-8 py-3 text-sm sm:text-base bg-white rounded-none tracking-wide hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    Descargar PDF
                    {latestBook.formatos[0].size && (
                      <span className="text-xs opacity-75">({latestBook.formatos[0].size})</span>
                    )}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
