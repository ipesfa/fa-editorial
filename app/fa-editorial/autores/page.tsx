import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { autores } from "@/data/autores"

export default function AuthorsPage() {
  const getInitials = (nombre: string) => {
    return nombre
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

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
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Autores</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Conoce a los investigadores y académicos que forman parte de nuestra editorial
              </p>
              <div className="w-24 h-px bg-border mx-auto mt-8"></div>
            </div>

            {/* Grid de autores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
              {autores.map((autor) => (
                <div key={autor.id} className="text-center group">
                  <div className="space-y-4">
                    {/* Foto o iniciales */}
                    <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted">
                      {autor.foto ? (
                        <Image
                          src={autor.foto || "/placeholder.svg"}
                          alt={`Foto de ${autor.nombre}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-accent text-foreground text-2xl font-bold">
                          {getInitials(autor.nombre)}
                        </div>
                      )}
                    </div>

                    {/* Información del autor */}
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {autor.nombre}
                      </h3>

                      <p className="text-primary font-medium">{autor.area}</p>

                      <p className="text-muted-foreground text-sm leading-relaxed">{autor.bioCorta}</p>
                    </div>

                    {/* Link al perfil */}
                    <div className="pt-2">
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium underline-animated"
                        asChild
                      >
                        <Link href={`/fa-editorial/autores/${autor.id}`}>Ver perfil / libros →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
