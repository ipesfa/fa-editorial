import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Libro } from "@/data/libros"

interface BookCardProps {
  libro: Libro
}

export function BookCard({ libro }: BookCardProps) {
  return (
    <Link href={`/fa-editorial/libro/${libro.id}`} className="group block">
      <div className="space-y-4">
        {/* Portada con hover effect */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
          <Image
            src={libro.portada || "/placeholder.svg"}
            alt={`Portada de ${libro.titulo}`}
            fill
            className="object-cover transition-all duration-200 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />

          {/* Badge de acceso abierto */}
          {libro.openAccess && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">Acceso abierto</Badge>
          )}

          {/* Sombra suave en hover */}
          <div className="absolute inset-0 shadow-none group-hover:shadow-lg transition-shadow duration-200 rounded-lg" />
        </div>

        {/* Información del libro */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {libro.titulo}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">{libro.autores.join(", ")}</p>

          <p className="text-sm text-muted-foreground font-medium">{libro.anio}</p>

          {/* Chips de temática */}
          <div className="flex flex-wrap gap-1">
            {libro.tematicas.slice(0, 2).map((tematica) => (
              <Badge key={tematica} variant="outline" className="text-xs">
                {tematica}
              </Badge>
            ))}
            {libro.tematicas.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{libro.tematicas.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
