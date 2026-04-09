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
    portada: "/covers/libro-fareros-miguel-fanchovich.png",
    resumen:
      "Qué acontece en esos oscuros segundos que continúan, irremediablemente, al rotar permanente de la luz del faro. Ondulaciones de las mareas, las visitas que fluctúan, las figuras y sombras que emergen detrás de cada oleaje. La experiencia vívida, las sensibilidades y la inercia de lo cotidiano, se entretejen en la novela de Miguel Fanchovich para desplegar las condiciones de vida de los trabajadores de un faro al sur del mar argentino.",
    tematicas: ["Literatura", "Novela", "Argentina"],
    coleccion: "Literarias",
    isbn: "978-631-91361-0-4",
    paginas: 65,
    formatos: [
      { tipo: "PDF", url: "/downloads/FAREROS.pdf", size: "9.4MB" },
      { tipo: "EPUB", url: "/downloads/FAREROS.epub", size: "No disponible" },
    ],
    openAccess: true,
  },
  {
    id: "2",
    titulo: "Didáctica de la Educación Ambiental en el nivel superior. Marcos conceptuales y proyectos situados",
    autores: [
      "Nancy Edith Fernández-Marchesi (coordinadora)",
      "Cinthia Gómez",
      "Juan Pablo Noriega Romero",
      "Amancay Castro Fidalgo",
      "Mariana Ledesma",
      "Florencia Larroude",
      "Lucila Dutari",
      "Magalí Castillo",
      "María Pía González",
      "Florencia Sanchez",
      "Camila Tarantino",
      "Agustín Cerávolo",
    ],
    anio: 2026,
    portada: "/covers/libro-didactica-educacion-ambiental-nivel-superior.png",
    resumen:
      "¿Cómo reconfigurar la formación universitaria frente a la urgencia de la crisis climática? En el marco de la Ley de Educación Ambiental Integral, este libro elaborado en conjunto entre investigadoras y estudiantes de la Universidad Nacional de Tierra del Fuego, Antártida e Islas del Atlántico Sur (UNTDF), se posiciona como una respuesta necesaria y situada.\n\nDesde una perspectiva crítica, ética e interdisciplinaria, la obra recupera proyectos de Educación Ambiental realizados en el marco de una asignatura de la Licenciatura en Ciencias Ambientales del Instituto de Ciencias Polares, Ambiente y Recursos Naturales entre 2021 y 2025. Lejos de la abstracción teórica, estas páginas documentan el encuentro entre el rigor científico y el Pensamiento Ambiental Latinoamericano, al utilizar metodologías que abordan conflictos socioambientales reales.\n\nA través de mapeos de actores, diagnósticos territoriales y estrategias de comunicación digital, la producción académica trasciende la estrechez disciplinar para convertirse en agente de transformación social. Este libro, además de ofrecer una hoja de ruta metodológica para docentes y profesionales, reafirma el compromiso de la universidad pública con la construcción de un futuro más justo, inclusivo y ambientalmente responsable.\n\nUna lectura esencial para quienes creen que la educación es una de las políticas fundamentales para habitar un planeta en crisis.",
    tematicas: ["Educación Ambiental", "Didáctica", "Nivel Superior", "Biodiversidad"],
    coleccion: "Territorios y biodiversidad",
    isbn: "978-631-91361-1-1",
    paginas: 148,
    formatos: [{ tipo: "PDF", url: "/downloads/Didáctica-Educación-AmbientalNS.pdf", size: "7.1MB" }],
    openAccess: true,
  },
]
