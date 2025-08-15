import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-8">
          {/* Contenido principal */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8">
            {/* Lado izquierdo: Logos y texto descriptivo */}
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-4 mb-3">
                <Image
                  src="/fa-blanco.png"
                  alt="FA Editorial"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
                <Image
                  src="/fa-ipes.png"
                  alt="IPES Florentino Ameghino"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-white/80 font-light">
                Descubrí las mejores publicaciones académicas y culturales
              </p>
            </div>

            {/* Lado derecho: Instagram y contacto */}
            <div className="flex flex-col items-end space-y-4">
              {/* Redes sociales */}
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/fa_publicaciones/"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E6D690] hover:text-black transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>

              {/* Información de contacto */}
              <div className="flex flex-col gap-y-1 items-end">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#E6D690]" />
                  <a 
                    href="mailto:faeditorial@ipesfa-ushuaia.edu.ar"
                    className="text-sm hover:text-[#E6D690] transition-colors duration-200"
                  >
                    faeditorial@ipesfa-ushuaia.edu.ar
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#E6D690]" />
                  <span className="text-sm">IPES Florentino Ameghino, Ushuaia TDF</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex justify-center">
            <div className="text-sm text-white/80">© 2025 FA Editorial. Todos los derechos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
