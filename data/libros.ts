export interface Libro {
  id: string
  titulo: string
  autores: string[]
  anio: number
  portada: string
  resumen: string
  tematicas: string[]
  coleccion?: string
  isbn?: string
  doi?: string
  paginas?: number
  formatos?: Array<{
    tipo: "PDF" | "EPUB"
    url: string
    size?: string
  }>
  openAccess?: boolean
}

export const libros: Libro[] = [
  {
    id: "1",
    titulo: "Fareros",
    autores: ["Miguel Fanchovich"],
    anio: 2025,
    portada: "/libro-fareros-miguel-fanchovich.png",
    resumen:
      "Qué acontece en esos oscuros segundos que continúan, irremediablemente, al rotar permanente de la luz del faro. Ondulaciones de las mareas, las visitas que fluctúan, las figuras y sombras que emergen detrás de cada oleaje. La experiencia vívida, las sensibilidades y la inercia de lo cotidiano, se entretejen en la novela de Miguel Fanchovich para desplegar las condiciones de vida de los trabajadores de un faro al sur del mar argentino.",
    tematicas: ["Literatura", "Novela", "Argentina"],
    coleccion: "Literarias",
    isbn: "En trámite",
    paginas: 65,
    formatos: [
      { tipo: "PDF", url: "/downloads/fareros.pdf", size: "9.4MB" },
      { tipo: "EPUB", url: "/downloads/fareros.epub", size: "No disponible" },
    ],
    openAccess: true,
  },
]
