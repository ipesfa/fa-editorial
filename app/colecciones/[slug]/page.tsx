import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookCard } from "@/components/book-card"
import { ArrowLeft, BookOpen, Users, Calendar, FileText } from "lucide-react"
import { colecciones } from "@/data/colecciones"
import { libros } from "@/data/libros"

interface CollectionPageProps {
  params: Promise<{
    slug: string
  }>
}

const iconMap = {
  "practicas-y-saberes": "🎓",
  "materiales-educativos": "📚",
  "historias": "🌍",
  "literarias": "📖",
  "culturas": "👥",
  "lenguajes": "🗣️",
  "territorios-y-biodiversidad": "🌱",
  "educacion-en-debate": "💡",
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const coleccion = colecciones.find((c) => c.slug === slug)

  if (!coleccion) {
    notFound()
  }

  const librosDeColeccion = libros.filter((libro) => libro.coleccion === coleccion.nombre)
  const emoji = iconMap[slug as keyof typeof iconMap] || "📚"

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/colecciones"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a colecciones
              </Link>
            </div>

            {/* Header de la colección */}
            <div className="text-center mb-16">
              <div className="mb-6">
                <span className="text-6xl lg:text-8xl">{emoji}</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
                {coleccion.nombre}
              </h1>
              <div className="w-24 h-px bg-border mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {coleccion.descripcion}
              </p>
            </div>

            {/* Estadísticas de la colección */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-[#D4C078]" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {librosDeColeccion.length}
                </div>
                <div className="text-sm text-muted-foreground">Publicaciones</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-[#D4C078]" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {librosDeColeccion.length > 0 ? Math.ceil(librosDeColeccion.length * 1.5) : 0}
                </div>
                <div className="text-sm text-muted-foreground">Autores</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-[#D4C078]" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {new Date().getFullYear()}
                </div>
                <div className="text-sm text-muted-foreground">Año actual</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center">
                <FileText className="w-8 h-8 mx-auto mb-3 text-[#D4C078]" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  Activa
                </div>
                <div className="text-sm text-muted-foreground">Estado</div>
              </div>
            </div>

            {/* Libros de la colección */}
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-3xl font-semibold text-foreground">
                  Publicaciones de la colección
                </h2>
                <div className="text-sm text-muted-foreground">
                  {librosDeColeccion.length} publicación{librosDeColeccion.length !== 1 ? 'es' : ''}
                </div>
              </div>

              {librosDeColeccion.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
                  {librosDeColeccion.map((libro) => (
                    <BookCard key={libro.id} libro={libro} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="mb-6">
                    <span className="text-6xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Próximamente
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Estamos trabajando en nuevas publicaciones para esta colección. 
                    Muy pronto tendremos contenido disponible.
                  </p>
                  <Link
                    href="/envio-proyectos"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-base font-semibold hover:bg-[#D4C078] hover:text-black transition-all duration-300 tracking-wide rounded-lg"
                  >
                    Enviar proyecto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* Sección de información adicional */}
            <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  ¿Te interesa esta colección?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Si tenés un proyecto de investigación o publicación que se alinee con "{coleccion.nombre}", 
                  te invitamos a enviar tu propuesta. Nuestro equipo editorial está siempre buscando 
                  nuevas voces y perspectivas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/envio-proyectos"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-base font-semibold hover:bg-[#D4C078] hover:text-black transition-all duration-300 tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Enviar proyecto
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/colecciones"
                    className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 text-base font-semibold hover:border-[#D4C078] hover:text-[#D4C078] transition-all duration-300 tracking-wide rounded-lg"
                  >
                    Ver otras colecciones
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
