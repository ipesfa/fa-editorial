import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-8">
          {/* Header con logo y redes sociales */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Link href="/fa-editorial" className="text-2xl font-sans font-light tracking-wide">
                FA Editorial
              </Link>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/fa_publicaciones/"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E6D690] hover:text-black transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Enlaces de políticas y contacto */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80 mb-8 justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <Link
                href="/fa-editorial/politica-privacidad"
                className="hover:text-[#E6D690] transition-colors duration-200"
              >
                Política de privacidad
              </Link>
              <Link href="/fa-editorial/politica-cookies" className="hover:text-[#E6D690] transition-colors duration-200">
                Política de cookies
              </Link>
              <Link href="/fa-editorial/accesibilidad" className="hover:text-[#E6D690] transition-colors duration-200">
                Accesibilidad
              </Link>
              <Link
                href="/fa-editorial/terminos-condiciones"
                className="hover:text-[#E6D690] transition-colors duration-200"
              >
                Términos y condiciones generales
              </Link>
              <Link href="/fa-editorial/aviso-legal" className="hover:text-[#E6D690] transition-colors duration-200">
                Aviso legal
              </Link>
            </div>
            
            <div className="flex flex-col gap-y-1 items-end">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#E6D690]" />
                <a 
                  href="mailto:faeditorial@ipesfa-ushuaia.edu.ar"
                  className="hover:text-[#E6D690] transition-colors duration-200"
                >
                  faeditorial@ipesfa-ushuaia.edu.ar
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#E6D690]" />
                <span>IPES Florentino Ameghino, Ushuaia TDF</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex justify-end">
            <div className="text-sm text-white/80">© 2025 FA Editorial</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
