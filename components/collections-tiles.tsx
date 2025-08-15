"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  Globe, 
  MessageSquare, 
  Calculator, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  Leaf,
  BookText,
  Languages
} from "lucide-react"
import { colecciones } from "@/data/colecciones"

export function CollectionsTiles() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Mapeo de iconos para las 8 colecciones
  const iconMap = {
    "practicas-y-saberes": GraduationCap,
    "materiales-educativos": BookOpen,
    "historias": Globe,
    "literarias": BookText,
    "culturas": Users,
    "lenguajes": Languages,
    "territorios-y-biodiversidad": Leaf,
    "educacion-en-debate": Lightbulb,
  }

  const allCollections = colecciones.map((coleccion) => ({
    ...coleccion,
    icon: iconMap[coleccion.slug as keyof typeof iconMap] || BookOpen,
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(allCollections.length / 3))
    }, 4000)

    return () => clearInterval(interval)
  }, [allCollections.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(allCollections.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(allCollections.length / 3)) % Math.ceil(allCollections.length / 3))
  }

  const getVisibleCollections = () => {
    const itemsPerSlide = 3
    const startIndex = currentIndex * itemsPerSlide
    return allCollections.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-8">Colecciones</h2>
          </div>

          <div className="relative">
            {/* Grid optimizado para móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 min-h-[180px] sm:min-h-[200px]">
              {getVisibleCollections().map((coleccion, index) => {
                const IconComponent = coleccion.icon

                return (
                  <div
                    key={`${coleccion.id}-${currentIndex}`}
                    className="group cursor-pointer animate-in slide-in-from-right-4 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={`/fa-editorial/colecciones/${coleccion.slug}`}>
                      <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#E6D690] hover:bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 h-40 sm:h-48 flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-105">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-gray-600 group-hover:text-[#D4C078] transition-colors duration-300" />
                        <h3 className="font-sans text-xs sm:text-sm font-medium tracking-wide leading-tight text-black">
                          {coleccion.nombre}
                        </h3>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>

            {/* Botones de navegación optimizados para móvil */}
            {allCollections.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-[#D4C078] hover:bg-white/90 transition-all duration-200 shadow-md"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-[#D4C078] hover:bg-white/90 transition-all duration-200 shadow-md"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}
          </div>

          {/* Indicadores optimizados para móvil */}
          {allCollections.length > 3 && (
            <div className="flex justify-center mb-6 sm:mb-8 space-x-1.5 sm:space-x-2">
              {Array.from({ length: Math.ceil(allCollections.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#D4C078] w-4 sm:w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Ir a página ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Enlace optimizado para móvil */}
          <div className="flex justify-center sm:justify-end">
            <Link 
              href="/fa-editorial/colecciones" 
              className="text-gray-700 hover:text-[#D4C078] p-0 h-auto font-medium tracking-wide group text-lg sm:text-xl lg:text-2xl flex items-center gap-2"
            >
              Nuestras Colecciones
              <span className="group-hover:translate-x-1 transition-transform duration-200 text-xl sm:text-2xl lg:text-3xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
