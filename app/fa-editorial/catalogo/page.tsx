"use client";

import { useState, useMemo } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { libros, Libro } from '@/data/libros';
import { colecciones } from '@/data/colecciones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, BookOpen, Download, Eye } from 'lucide-react';
import Link from 'next/link';

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');

  // Obtener años únicos de los libros
  const years = useMemo(() => {
    const uniqueYears = [...new Set(libros.map(libro => libro.anio))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  // Filtrar libros
  const filteredBooks = useMemo(() => {
    return libros.filter(libro => {
      const matchesSearch = 
        libro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        libro.autores.some(autor => autor.toLowerCase().includes(searchTerm.toLowerCase())) ||
        libro.tematicas.some(tematica => tematica.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCollection = selectedCollection === 'all' || libro.coleccion === selectedCollection;
      const matchesYear = selectedYear === 'all' || libro.anio.toString() === selectedYear;
      const matchesFormat = selectedFormat === 'all' || 
        (selectedFormat === 'open-access' && libro.openAccess) ||
        (selectedFormat === 'pdf' && libro.formatos?.some(f => f.tipo === 'PDF')) ||
        (selectedFormat === 'epub' && libro.formatos?.some(f => f.tipo === 'EPUB'));

      return matchesSearch && matchesCollection && matchesYear && matchesFormat;
    });
  }, [searchTerm, selectedCollection, selectedYear, selectedFormat]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E6D690]/20 to-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                Catálogo de Publicaciones
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Descubrí nuestra colección completa de publicaciones académicas y culturales. 
                Filtra por colección, año, formato y encuentra el contenido que buscas.
              </p>
            </div>

            {/* Filtros */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
                {/* Búsqueda */}
                <div className="relative sm:col-span-2 lg:col-span-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar libros, autores..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filtro por Colección */}
                <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las colecciones" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las colecciones</SelectItem>
                    {colecciones.map((coleccion) => (
                      <SelectItem key={coleccion.id} value={coleccion.nombre}>
                        {coleccion.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Filtro por Año */}
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos los años" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los años</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Filtro por Formato */}
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos los formatos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los formatos</SelectItem>
                    <SelectItem value="open-access">Acceso abierto</SelectItem>
                    <SelectItem value="pdf">PDF disponible</SelectItem>
                    <SelectItem value="epub">EPUB disponible</SelectItem>
                  </SelectContent>
                </Select>

                {/* Botón Limpiar Filtros */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCollection('all');
                    setSelectedYear('all');
                    setSelectedFormat('all');
                  }}
                  className="border-[#E6D690] text-[#E6D690] hover:bg-[#E6D690] hover:text-black sm:col-span-2 lg:col-span-1"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Card className="text-center border-[#E6D690]/20">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E6D690]">{libros.length}</div>
                  <p className="text-sm sm:text-base text-gray-600">Total de libros</p>
                </CardContent>
              </Card>
              <Card className="text-center border-[#E6D690]/20">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E6D690]">
                    {libros.filter(l => l.openAccess).length}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Acceso abierto</p>
                </CardContent>
              </Card>
              <Card className="text-center border-[#E6D690]/20">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E6D690]">{colecciones.length}</div>
                  <p className="text-sm sm:text-base text-gray-600">Colecciones</p>
                </CardContent>
              </Card>
              <Card className="text-center border-[#E6D690]/20">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E6D690]">{filteredBooks.length}</div>
                  <p className="text-sm sm:text-base text-gray-600">Resultados</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lista de Libros */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                  No se encontraron resultados
                </h3>
                <p className="text-sm sm:text-base text-gray-500">
                  Intenta ajustar los filtros o términos de búsqueda
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredBooks.map((libro) => (
                  <Card key={libro.id} className="group hover:shadow-xl transition-all duration-300 border-[#E6D690]/20">
                    <CardHeader className="pb-4">
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                        <img
                          src={libro.portada}
                          alt={libro.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {libro.openAccess && (
                          <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">
                            Acceso Abierto
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2 group-hover:text-[#E6D690] transition-colors">
                        {libro.titulo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Autores:</p>
                          <p className="text-xs sm:text-sm font-medium">{libro.autores.join(', ')}</p>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                          <span>{libro.anio}</span>
                          {libro.paginas && <span>{libro.paginas} páginas</span>}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {libro.tematicas.slice(0, 3).map((tematica, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tematica}
                            </Badge>
                          ))}
                        </div>

                        {libro.coleccion && (
                          <Badge variant="outline" className="text-xs border-[#E6D690] text-[#E6D690]">
                            {libro.coleccion}
                          </Badge>
                        )}

                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 text-justify">
                          {libro.resumen}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 pt-2">
                          <Button asChild size="sm" className="flex-1 bg-[#E6D690] text-black hover:bg-[#D4C078] text-xs sm:text-sm">
                            <Link href={`/fa-editorial/libro/${libro.id}`}>
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Ver detalles
                            </Link>
                          </Button>
                          
                          {libro.formatos && libro.formatos.length > 0 && (
                            <Button size="sm" variant="outline" className="border-[#E6D690] text-[#E6D690] hover:bg-[#E6D690] hover:text-black text-xs sm:text-sm" asChild>
                              <Link href={libro.formatos[0].url}>
                                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                Descargar
                                {libro.formatos[0].size && (
                                  <span className="ml-1 text-xs opacity-75">({libro.formatos[0].size})</span>
                                )}
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
