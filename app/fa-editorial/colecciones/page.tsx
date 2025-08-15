import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft } from "lucide-react"
import { colecciones } from "@/data/colecciones"
import { 
  GraduationCap,
  BookOpen,
  Globe,
  BookText,
  Users,
  Languages,
  Leaf,
  Lightbulb
} from "lucide-react"

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

export default function ColeccionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/fa-editorial"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nuestras Colecciones
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">
                Explora nuestras colecciones especializadas que abarcan diferentes áreas del conocimiento y la investigación académica.
              </p>
              <div className="w-24 h-px bg-border mx-auto mt-8"></div>
            </div>

            {/* Grid de colecciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {colecciones.map((coleccion) => {
                const IconComponent = iconMap[coleccion.slug as keyof typeof iconMap] || BookOpen
                
                return (
                  <Link
                    key={coleccion.id}
                    href={`/fa-editorial/colecciones/${coleccion.slug}`}
                    className="group block"
                  >
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#E6D690] hover:bg-white rounded-2xl p-6 h-96 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      {/* Header con icono y título */}
                      <div className="text-center mb-4">
                        <div className="mb-4">
                          <IconComponent className="w-10 h-10 mx-auto text-gray-600 group-hover:text-[#D4C078] transition-colors duration-300" />
                        </div>
                        <h3 className="font-sans text-lg font-semibold tracking-wide leading-tight text-black mb-3">
                          {coleccion.nombre}
                        </h3>
                      </div>
                      
                      {/* Descripción con scroll si es necesario */}
                      <div className="flex-1 overflow-hidden">
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-8 group-hover:line-clamp-none group-hover:overflow-y-auto group-hover:pr-2 text-justify">
                          {coleccion.descripcion}
                        </p>
                      </div>
                      
                      {/* Footer con botón */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex-shrink-0">
                        <div className="flex items-center justify-center text-[#D4C078] font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                          Ver colección
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Sección de información adicional */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  ¿Interesado en publicar?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
                  Si tenés un proyecto de investigación o publicación que se alinee con alguna de nuestras colecciones, 
                  te invitamos a conocer nuestro proceso de envío de proyectos.
                </p>
                <Link
                  href="/fa-editorial/envio-proyectos"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-base font-semibold hover:bg-[#D4C078] hover:text-black transition-all duration-300 tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Enviar proyecto
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#D4C078] mb-2">
                  {colecciones.length}
                </div>
                <div className="text-lg text-muted-foreground">Colecciones Especializadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#D4C078] mb-2">
                  50+
                </div>
                <div className="text-lg text-muted-foreground">Publicaciones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#D4C078] mb-2">
                  100+
                </div>
                <div className="text-lg text-muted-foreground">Autores</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
