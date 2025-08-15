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
    isbn: "978-84-1234-567-8",
    paginas: 65,
    formatos: [
      { tipo: "PDF", url: "/downloads/fareros.pdf" },
      { tipo: "EPUB", url: "/downloads/fareros.epub" },
    ],
    openAccess: true,
  },
  {
    id: "2",
    titulo: "Historia del Arte Contemporáneo Latinoamericano",
    autores: ["Dra. Ana Martínez"],
    anio: 2023,
    portada: "/libro-historia-arte-contemporaneo-latinoamericano.png",
    resumen: "Un recorrido exhaustivo por las corrientes artísticas latinoamericanas del siglo XX y XXI.",
    tematicas: ["Arte", "Historia", "Latinoamérica"],
    coleccion: "Estudios Culturales",
    isbn: "978-84-1234-568-5",
    paginas: 450,
    formatos: [{ tipo: "PDF", url: "/downloads/arte-contemporaneo.pdf" }],
    openAccess: false,
  },
  {
    id: "3",
    titulo: "Políticas Públicas y Desarrollo Sostenible",
    autores: ["Dr. Luis Fernández", "Mg. Patricia Silva"],
    anio: 2024,
    portada: "/libro-politicas-publicas-desarrollo-sostenible.png",
    resumen: "Análisis de las políticas públicas orientadas al desarrollo sostenible en América Latina.",
    tematicas: ["Políticas Públicas", "Desarrollo Sostenible", "Medio Ambiente"],
    coleccion: "Estudios Políticos",
    isbn: "978-84-1234-569-2",
    paginas: 280,
    formatos: [
      { tipo: "PDF", url: "/downloads/politicas-desarrollo.pdf" },
      { tipo: "EPUB", url: "/downloads/politicas-desarrollo.epub" },
    ],
    openAccess: true,
  },
  {
    id: "4",
    titulo: "Psicología Educativa: Nuevos Enfoques",
    autores: ["Dra. Carmen López"],
    anio: 2023,
    portada: "/libro-psicologia-educativa-nuevos-enfoques.png",
    resumen: "Perspectivas innovadoras en psicología educativa para el siglo XXI.",
    tematicas: ["Psicología", "Educación", "Pedagogía"],
    coleccion: "Educación y Sociedad",
    isbn: "978-84-1234-570-8",
    paginas: 350,
    openAccess: false,
  },
  {
    id: "5",
    titulo: "Economía Digital y Transformación Social",
    autores: ["Dr. Roberto Jiménez", "Dra. Isabel Moreno"],
    anio: 2024,
    portada: "/digital-economy-social-transformation-book.png",
    resumen: "Impacto de la economía digital en las estructuras sociales contemporáneas.",
    tematicas: ["Economía", "Tecnología", "Sociedad"],
    coleccion: "Estudios Económicos",
    isbn: "978-84-1234-571-5",
    paginas: 290,
    formatos: [{ tipo: "PDF", url: "/downloads/economia-digital.pdf" }],
    openAccess: true,
  },
]
