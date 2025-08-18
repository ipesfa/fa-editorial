import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-12 lg:py-16">
          {/* Sección superior - Información de contacto y redes sociales */}
          <div className="flex flex-col space-y-6 md:flex-row md:justify-between md:items-start md:space-y-0 mb-8 sm:mb-10">
            {/* Lado izquierdo - Información de contacto */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
                DÓNDE ENCONTRARNOS
              </div>
              <div className="text-sm sm:text-base text-white mb-1">
                faeditorial@ipesfa-ushuaia.edu.ar
              </div>
              <div className="text-sm sm:text-base text-white">
                IPES Florentino Ameghino, Ushuaia TDF
              </div>
            </div>

            {/* Lado derecho - Redes sociales */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 mb-3 ml-4 md:ml-4">
                SÍGUENOS
              </div>
              <Link
                href="https://www.instagram.com/fa_publicaciones/"
                className="text-sm sm:text-base text-white hover:text-[#E6D690] transition-colors duration-200"
                aria-label="Síguenos en Instagram"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Sección media - Logos institucionales centrados en móvil */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
            <div>
              <Image
                src="/fa-blanco.png"
                alt="FA Editorial"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <div>
              <Link href="https://ipesfa-ushuaia.edu.ar/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/fa-ipes.png"
                  alt="IPES Florentino Ameghino"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <div>
              <Link href="https://revista-institucional.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/revista.png"
                  alt="Revista"
                  width={120}
                  height={40}
                  className="h-6 sm:h-7 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Sección inferior - Copyright */}
          <div className="border-t border-white/20 pt-4 sm:pt-6">
            <div className="text-center">
              <div className="text-xs sm:text-sm text-white/80">
                © 2025 FA Editorial. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
