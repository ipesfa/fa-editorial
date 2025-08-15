import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Download, Share2, BookOpen, Calendar, Users } from "lucide-react"
import { libros } from "@/data/libros"

interface BookPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params
  const libro = libros.find((l) => l.id === id)

  if (!libro) {
    notFound()
  }

  const menuItems = [
    { name: "Inicio", href: "/fa-editorial" },
    { name: "Quienes somos", href: "/fa-editorial/quienes-somos" },
    { name: "Catálogo", href: "/fa-editorial/catalogo" },
    { name: "Colecciones", href: "/fa-editorial/colecciones" },
    { name: "Envío de proyectos", href: "/fa-editorial/envio-proyectos" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E6D690' }}>
      {/* Header específico para página del libro */}
      <header className="sticky top-0 z-50 w-full border-b border-[#D4C078] backdrop-blur-sm" style={{ backgroundColor: '#E6D690' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/fa-editorial" className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/fa-editorial-logo.png"
                alt="FA Editorial Logo"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <span className="font-light text-lg sm:text-xl text-black tracking-wide">EDITORIAL</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              <button className="text-black hover:text-white transition-colors duration-200">
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

      <main className="py-8 sm:py-12" style={{ backgroundColor: '#E6D690' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/fa-editorial"
                className="inline-flex items-center text-black hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al catálogo
              </Link>
            </div>

            {/* Contenido principal - Diseño centrado como el ejemplo */}
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              {/* Portada del libro - Sin efectos 3D */}
              <div className="w-64 sm:w-80 max-w-full">
                <div className="aspect-[3/4] w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={libro.portada || "/placeholder.svg"}
                    alt={`Portada de ${libro.titulo}`}
                    width={320}
                    height={427}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Título del libro */}
              <div className="text-center">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
                  {libro.titulo}
                </h1>
              </div>

              {/* Tags de autor y metadatos */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                {/* Tags de Autor */}
                {libro.autores.map((autor) => (
                  <div key={autor} className="bg-black border border-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#E6D690]" />
                      <span className="text-xs sm:text-sm font-medium text-[#E6D690]">{autor}</span>
                      <span className="text-xs text-gray-300">Autor</span>
                    </div>
                  </div>
                ))}
                
                {/* Tag de Año */}
                <div className="bg-black border border-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#E6D690]" />
                    <span className="text-xs sm:text-sm font-medium text-[#E6D690]">{libro.anio}</span>
                  </div>
                </div>

                {/* Tag de Colección */}
                {libro.coleccion && (
                  <div className="bg-black border border-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#E6D690]" />
                      <span className="text-xs sm:text-sm font-medium text-[#E6D690]">{libro.coleccion}</span>
                    </div>
                  </div>
                )}

                {/* Tag de Acceso Abierto */}
                {libro.openAccess && (
                  <div className="bg-black border border-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
                    <span className="text-xs sm:text-sm font-medium text-[#E6D690]">Acceso Abierto</span>
                  </div>
                )}
              </div>

              {/* Resumen completo */}
              <div className="max-w-4xl mx-auto w-full">
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">Descripción</h2>
                  
                  {/* Metadatos en badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs sm:text-sm">
                      {libro.anio}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs sm:text-sm">
                      Español
                    </Badge>
                    {libro.paginas && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs sm:text-sm">
                        {libro.paginas} páginas
                      </Badge>
                    )}
                  </div>

                  {/* Información del autor */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div>
                      <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">AUTORES</h3>
                      {libro.autores.map((autor) => (
                        <p key={autor} className="text-black underline cursor-pointer hover:text-[#E6D690] transition-colors text-sm sm:text-base">
                          {autor}
                        </p>
                      ))}
                    </div>
                    {libro.coleccion && (
                      <div>
                        <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">COLECCIÓN</h3>
                        <p className="text-black text-sm sm:text-base">{libro.coleccion}</p>
                      </div>
                    )}
                  </div>

                  {/* Texto del resumen completo */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-black leading-relaxed text-base sm:text-lg text-justify">
                      {libro.resumen}
                    </p>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                    {libro.openAccess && libro.formatos && (
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                        {libro.formatos.map((formato) => (
                          <Button
                            key={formato.tipo}
                            size="lg"
                            className={`border border-black transition-all duration-300 text-sm sm:text-base ${
                              formato.tipo === "EPUB" 
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                                : "bg-black hover:bg-white hover:text-black text-[#E6D690]"
                            }`}
                            disabled={formato.tipo === "EPUB"}
                            asChild={formato.tipo !== "EPUB"}
                          >
                            {formato.tipo === "EPUB" ? (
                              <div className="flex items-center">
                                <Download className="w-4 h-4 mr-2" />
                                {formato.tipo} - {formato.size}
                              </div>
                            ) : (
                              <Link href={formato.url}>
                                <Download className="w-4 h-4 mr-2" />
                                Descargar {formato.tipo}
                                {formato.size && (
                                  <span className="ml-2 text-xs opacity-75">({formato.size})</span>
                                )}
                              </Link>
                            )}
                          </Button>
                        ))}
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="lg"
                      className="border-black text-black hover:bg-black hover:text-[#E6D690] transition-all duration-300 text-sm sm:text-base"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="max-w-4xl mx-auto w-full">
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h3 className="font-medium text-black mb-3 sm:mb-4 text-sm sm:text-base">Información Técnica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    {libro.isbn && (
                      <div>
                        <span className="font-medium">ISBN:</span> {libro.isbn}
                      </div>
                    )}
                    {libro.doi && (
                      <div>
                        <span className="font-medium">DOI:</span> {libro.doi}
                      </div>
                    )}
                    {libro.paginas && (
                      <div>
                        <span className="font-medium">Páginas:</span> {libro.paginas}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
