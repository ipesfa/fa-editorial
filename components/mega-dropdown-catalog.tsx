"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Link from "next/link"

interface MegaDropdownCatalogProps {
  isOpen: boolean
  onClose: () => void
}

export function MegaDropdownCatalog({ isOpen, onClose }: MegaDropdownCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filterChips = [
    { name: "2024", type: "año" },
    { name: "2023", type: "año" },
    { name: "2022", type: "año" },
    { name: "Metodología", type: "temática" },
    { name: "Arte", type: "temática" },
    { name: "Políticas Públicas", type: "temática" },
    { name: "Psicología", type: "temática" },
    { name: "Economía", type: "temática" },
    { name: "Investigación Académica", type: "colección" },
    { name: "Estudios Culturales", type: "colección" },
    { name: "Estudios Políticos", type: "colección" },
  ]

  if (!isOpen) return null

  return (
    <div className="absolute left-0 right-0 top-full bg-white border-b border-border shadow-lg z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Búsqueda rápida */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Búsqueda rápida</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar libros, autores, temas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filtros por categorías */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Filtros rápidos</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Año</p>
                <div className="flex flex-wrap gap-2">
                  {filterChips
                    .filter((chip) => chip.type === "año")
                    .map((chip) => (
                      <Badge
                        key={chip.name}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent hover:border-primary transition-all duration-200"
                      >
                        {chip.name}
                      </Badge>
                    ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Temática</p>
                <div className="flex flex-wrap gap-2">
                  {filterChips
                    .filter((chip) => chip.type === "temática")
                    .slice(0, 4)
                    .map((chip) => (
                      <Badge
                        key={chip.name}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent hover:border-primary transition-all duration-200"
                      >
                        {chip.name}
                      </Badge>
                    ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Colección</p>
                <div className="flex flex-wrap gap-2">
                  {filterChips
                    .filter((chip) => chip.type === "colección")
                    .slice(0, 3)
                    .map((chip) => (
                      <Badge
                        key={chip.name}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent hover:border-primary transition-all duration-200"
                      >
                        {chip.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Enlaces rápidos</h3>
            <div className="space-y-3">
              <Link
                href="/fa-editorial/novedades"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 underline-animated"
                onClick={onClose}
              >
                <span className="text-lg">📚</span>
                <span>Novedades 2024</span>
              </Link>
              <Link
                href="/fa-editorial/acceso-abierto"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 underline-animated"
                onClick={onClose}
              >
                <span className="text-lg">🔓</span>
                <span>Acceso abierto</span>
              </Link>
              <Link
                href="/fa-editorial/mas-descargados"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 underline-animated"
                onClick={onClose}
              >
                <span className="text-lg">⭐</span>
                <span>Más descargados</span>
              </Link>
              <div className="pt-2 border-t border-border">
                <Link
                  href="/fa-editorial/catalogo"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                  onClick={onClose}
                >
                  Ver catálogo completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
