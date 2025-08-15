import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { libros } from "@/data/libros"

export function FeaturedBook() {
  // Obtener el libro más reciente (último en el array)
  const featuredBook = libros[0] // El primer libro es el más reciente según nuestros datos

  if (!featuredBook) return null

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground tracking-wide">
              Última publicación
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Portada grande */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="aspect-[3/4] w-full max-w-xs lg:max-w-sm">
                  <Image
                    src={featuredBook.portada || "/placeholder.svg"}
                    alt={`Portada de ${featuredBook.titulo}`}
                    fill
                    className="object-cover rounded-sm shadow-sm"
                  />
                </div>
                {featuredBook.openAccess && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-sm font-medium">
                    Acceso abierto
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <div className="space-y-6">
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-foreground leading-tight tracking-wide">
                  {featuredBook.titulo}
                </h3>

                <div className="space-y-3 text-lg">
                  <p className="text-muted-foreground">{featuredBook.autores.join(", ")}</p>
                  <p className="text-muted-foreground">{featuredBook.anio}</p>
                </div>

                <p className="text-foreground leading-relaxed text-base font-light text-justify">{featuredBook.resumen}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background font-light tracking-wide"
                  asChild
                >
                  <Link href={`/fa-editorial/libro/${featuredBook.id}`}>Ver libro</Link>
                </Button>

                {featuredBook.openAccess && featuredBook.formatos && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide bg-transparent"
                    asChild
                  >
                    <Link href={featuredBook.formatos[0].url}>Descargar</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
