"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

interface FiltersBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedFilters: {
    años: string[]
    tematicas: string[]
    colecciones: string[]
  }
  onFilterChange: (type: "años" | "tematicas" | "colecciones", value: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
  onClearFilters: () => void
}

export function FiltersBar({
  searchQuery,
  onSearchChange,
  selectedFilters,
  onFilterChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: FiltersBarProps) {
  const availableFilters = {
    años: ["2024", "2023", "2022", "2021"],
    tematicas: [
      "Metodología",
      "Arte",
      "Políticas Públicas",
      "Psicología",
      "Economía",
      "Historia",
      "Ciencias Sociales",
      "Educación",
    ],
    colecciones: [
      "Investigación Académica",
      "Estudios Culturales",
      "Estudios Políticos",
      "Educación y Sociedad",
      "Estudios Económicos",
    ],
  }

  const hasActiveFilters =
    selectedFilters.años.length > 0 ||
    selectedFilters.tematicas.length > 0 ||
    selectedFilters.colecciones.length > 0 ||
    searchQuery.length > 0

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {/* Búsqueda y ordenamiento */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar libros, autores, temas..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="az">A - Z</SelectItem>
                  <SelectItem value="za">Z - A</SelectItem>
                  <SelectItem value="year-desc">Año (desc)</SelectItem>
                  <SelectItem value="year-asc">Año (asc)</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={onClearFilters}
                  className="text-muted-foreground hover:text-foreground bg-transparent"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpiar
                </Button>
              )}
            </div>
          </div>

          {/* Filtros por chips */}
          <div className="space-y-4">
            {/* Años */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Año</p>
              <div className="flex flex-wrap gap-2">
                {availableFilters.años.map((año) => (
                  <Badge
                    key={año}
                    variant={selectedFilters.años.includes(año) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent transition-colors duration-200"
                    onClick={() => onFilterChange("años", año)}
                  >
                    {año}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Temáticas */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Temática</p>
              <div className="flex flex-wrap gap-2">
                {availableFilters.tematicas.map((tematica) => (
                  <Badge
                    key={tematica}
                    variant={selectedFilters.tematicas.includes(tematica) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent transition-colors duration-200"
                    onClick={() => onFilterChange("tematicas", tematica)}
                  >
                    {tematica}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Colecciones */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Colección</p>
              <div className="flex flex-wrap gap-2">
                {availableFilters.colecciones.map((coleccion) => (
                  <Badge
                    key={coleccion}
                    variant={selectedFilters.colecciones.includes(coleccion) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent transition-colors duration-200"
                    onClick={() => onFilterChange("colecciones", coleccion)}
                  >
                    {coleccion}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
