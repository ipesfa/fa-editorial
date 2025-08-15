import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-6 sm:py-8">
          {/* Contenido principal - Optimizado para móvil */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-6 sm:mb-8 space-y-6 lg:space-y-0">
            {/* Lado izquierdo: Logos y texto descriptivo */}
            <div className="w-full lg:w-auto">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-3">
                <Image
                  src="/fa-blanco.png"
                  alt="FA Editorial"
                  width={120}
                  height={40}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <Link href="https://ipesfa-ushuaia.edu.ar/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/fa-ipes.png"
                    alt="IPES Florentino Ameghino"
                    width={120}
                    height={40}
                    className="h-10 sm:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link href="https://revista-institucional.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/revista.png"
                    alt="Revista"
                    width={120}
                    height={40}
                    className="h-8 sm:h-9 w-auto object-contain hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-xs sm:max-w-none">
                Descubrí las mejores publicaciones académicas y culturales
              </p>
            </div>

            {/* Lado derecho: Instagram y contacto - Optimizado para móvil */}
            <div className="flex flex-col items-start lg:items-end space-y-4 w-full lg:w-auto">
              {/* Redes sociales */}
              <div className="flex space-x-3 sm:space-x-4">
                <Link
                  href="https://www.instagram.com/fa_publicaciones/"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E6D690] hover:text-black transition-colors duration-200"
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>

              {/* Información de contacto - Optimizado para móvil */}
              <div className="flex flex-col gap-y-2 sm:gap-y-1 items-start lg:items-end">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#E6D690] flex-shrink-0" />
                  <a 
                    href="mailto:faeditorial@ipesfa-ushuaia.edu.ar"
                    className="text-xs sm:text-sm hover:text-[#E6D690] transition-colors duration-200 break-all"
                  >
                    faeditorial@ipesfa-ushuaia.edu.ar
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#E6D690] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">
                    IPES Florentino Ameghino, Ushuaia TDF
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright - Centrado y optimizado para móvil */}
          <div className="border-t border-white/20 pt-4 sm:pt-6 flex justify-center">
            <div className="text-xs sm:text-sm text-white/80 text-center">
              © 2025 FA Editorial. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
