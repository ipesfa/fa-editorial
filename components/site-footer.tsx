import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-12 sm:py-16">
          {/* Sección superior - Información de contacto y redes sociales */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            {/* Lado izquierdo - Información de contacto */}
            <div className="mb-6 md:mb-0 flex flex-col items-start">
              <div className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
                DÓNDE ENCONTRARNOS
              </div>
              <div className="text-base text-white">
                faeditorial@ipesfa-ushuaia.edu.ar
              </div>
              <div className="text-base text-white">
                IPES Florentino Ameghino, Ushuaia TDF
              </div>
            </div>

            {/* Lado derecho - Redes sociales */}
            <div className="flex flex-col items-start">
              <div className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3 ml-4">
                SÍGUENOS
              </div>
              <Link
                href="https://www.instagram.com/fa_publicaciones/"
                className="text-base text-white hover:text-[#E6D690] transition-colors duration-200 block w-full text-left"
                aria-label="Síguenos en Instagram"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Sección media - Logos institucionales a la izquierda */}
          <div className="flex flex-wrap justify-start items-center gap-12 mb-8">
            <div>
              <Image
                src="/fa-blanco.png"
                alt="FA Editorial"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <Link href="https://ipesfa-ushuaia.edu.ar/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/fa-ipes.png"
                  alt="IPES Florentino Ameghino"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
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
                  className="h-7 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Sección inferior - Copyright */}
          <div className="border-t border-white/20 pt-6">
            <div className="text-center">
              <div className="text-sm text-white/80">
                © 2025 FA Editorial. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
