"use client"

import { useState, useMemo } from "react"
import { BookCard } from "./book-card"
import { FiltersBar } from "./filters-bar"
import { Button } from "@/components/ui/button"
import { libros } from "@/data/libros"

export function BooksGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    años: [] as string[],
    tematicas: [] as string[],
    colecciones: [] as string[],
  })
  const [sortBy, setSortBy] = useState("recent")
  const [displayCount, setDisplayCount] = useState(8)

  const handleFilterChange = (type: "años" | "tematicas" | "colecciones", value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value) ? prev[type].filter((item) => item !== value) : [...prev[type], value],
    }))
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedFilters({
      años: [],
      tematicas: [],
      colecciones: [],
    })
    setSortBy("recent")
  }

  const filteredAndSortedBooks = useMemo(() => {
    const filtered = libros.filter((libro) => {
      // Filtro de búsqueda
      const matchesSearch =
        searchQuery === "" ||
        libro.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        libro.autores.some((autor) => autor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        libro.tematicas.some((tematica) => tematica.toLowerCase().includes(searchQuery.toLowerCase()))

      // Filtros por chips
      const matchesYear = selectedFilters.años.length === 0 || selectedFilters.años.includes(libro.anio.toString())

      const matchesTheme =
        selectedFilters.tematicas.length === 0 ||
        selectedFilters.tematicas.some((tema) => libro.tematicas.includes(tema))

      const matchesCollection =
        selectedFilters.colecciones.length === 0 ||
        (libro.coleccion && selectedFilters.colecciones.includes(libro.coleccion))

      return matchesSearch && matchesYear && matchesTheme && matchesCollection
    })

    // Ordenamiento
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return b.anio - a.anio
        case "az":
          return a.titulo.localeCompare(b.titulo)
        case "za":
          return b.titulo.localeCompare(a.titulo)
        case "year-desc":
          return b.anio - a.anio
        case "year-asc":
          return a.anio - b.anio
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedFilters, sortBy])

  const displayedBooks = filteredAndSortedBooks.slice(0, displayCount)
  const hasMoreBooks = displayedBooks.length < filteredAndSortedBooks.length

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Catálogo interactivo</h2>
            <div className="w-24 h-px bg-border mx-auto"></div>
          </div>

          {/* Barra de filtros */}
          <FiltersBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearFilters={handleClearFilters}
          />

          {/* Resultados */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-6">
              {filteredAndSortedBooks.length} {filteredAndSortedBooks.length === 1 ? "resultado" : "resultados"}
            </p>

            {/* Grilla de libros */}
            {displayedBooks.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
                  {displayedBooks.map((libro) => (
                    <BookCard key={libro.id} libro={libro} />
                  ))}
                </div>

                {/* Botón cargar más */}
                {hasMoreBooks && (
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setDisplayCount((prev) => prev + 8)}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Cargar más libros
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No se encontraron libros que coincidan con los filtros seleccionados.
                </p>
                <Button variant="outline" onClick={handleClearFilters} className="mt-4 bg-transparent">
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
