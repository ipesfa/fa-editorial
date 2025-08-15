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
    { name: "Autores", href: "/fa-editorial/autores" },
    { name: "Envío de proyectos", href: "/fa-editorial/envio-proyectos" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E6D690' }}>
      {/* Header específico para página del libro */}
      <header className="sticky top-0 z-50 w-full border-b border-[#D4C078] backdrop-blur-sm" style={{ backgroundColor: '#E6D690' }}>
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/fa-editorial" className="flex items-center space-x-3">
              <Image
                src="/fa-editorial-logo.png"
                alt="FA Editorial Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-light text-xl text-black tracking-wide">EDITORIAL</span>
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

      <main className="py-12" style={{ backgroundColor: '#E6D690' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/fa-editorial"
                className="inline-flex items-center text-black hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al catálogo
              </Link>
            </div>

            {/* Contenido principal - Diseño centrado como el ejemplo */}
            <div className="flex flex-col items-center space-y-8">
              {/* Portada del libro - Sin efectos 3D */}
              <div className="w-80 max-w-full">
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
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                  {libro.titulo}
                </h1>
              </div>

              {/* Información de autores y metadatos - Tags como en el ejemplo */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {/* Tags de autores */}
                {libro.autores.map((autor) => (
                  <div key={autor} className="bg-black border border-gray-800 rounded-full px-6 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#E6D690]" />
                      <span className="text-sm font-medium text-[#E6D690]">{autor}</span>
                      <span className="text-xs text-gray-300">Autor</span>
                    </div>
                  </div>
                ))}
                
                {/* Tag de año */}
                <div className="bg-black border border-gray-800 rounded-full px-6 py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#E6D690]" />
                    <span className="text-sm font-medium text-[#E6D690]">{libro.anio}</span>
                  </div>
                </div>

                {/* Tag de colección */}
                {libro.coleccion && (
                  <div className="bg-black border border-gray-800 rounded-full px-6 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#E6D690]" />
                      <span className="text-sm font-medium text-[#E6D690]">{libro.coleccion}</span>
                    </div>
                  </div>
                )}

                {/* Tag de acceso abierto */}
                {libro.openAccess && (
                  <div className="bg-black border border-gray-800 rounded-full px-6 py-3 shadow-sm">
                    <span className="text-sm font-medium text-[#E6D690]">Acceso Abierto</span>
                  </div>
                )}
              </div>

              {/* Resumen completo - Diseño limpio */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h2 className="font-serif text-2xl font-semibold text-black mb-6">Descripción</h2>
                  
                  {/* Metadatos en tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {libro.anio}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      Español
                    </Badge>
                    {libro.paginas && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {libro.paginas} páginas
                      </Badge>
                    )}
                  </div>

                  {/* Información de autores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">AUTORES</h3>
                      {libro.autores.map((autor) => (
                        <p key={autor} className="text-black underline cursor-pointer hover:text-[#E6D690] transition-colors">
                          {autor}
                        </p>
                      ))}
                    </div>
                    {libro.coleccion && (
                      <div>
                        <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">COLECCIÓN</h3>
                        <p className="text-black">{libro.coleccion}</p>
                      </div>
                    )}
                  </div>

                  {/* Resumen completo */}
                  <div className="mb-8">
                    <p className="text-black leading-relaxed text-lg text-justify">
                      {libro.resumen}
                    </p>
                  </div>

                  {/* Temáticas */}
                  {libro.tematicas && libro.tematicas.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-sm uppercase text-gray-500 font-medium mb-3">TEMÁTICAS</h3>
                      <div className="flex flex-wrap gap-2">
                        {libro.tematicas.map((tematica) => (
                          <Badge key={tematica} variant="outline" className="border-gray-300 text-gray-700">
                            {tematica}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botones de acción */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                    {libro.openAccess && libro.formatos && (
                      <div className="flex flex-wrap gap-2">
                        {libro.formatos.map((formato) => (
                          <Button
                            key={formato.tipo}
                            size="lg"
                            className="bg-black hover:bg-white hover:text-black text-[#E6D690] border border-black transition-all duration-300"
                            asChild
                          >
                            <Link href={formato.url}>
                              <Download className="w-4 h-4 mr-2" />
                              Descargar {formato.tipo}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="lg"
                      className="border-black text-black hover:bg-black hover:text-[#E6D690] transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="max-w-4xl mx-auto w-full">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-medium text-black mb-4">Información Técnica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
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
  )
}
