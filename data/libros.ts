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
  /** false = oculto del sitio (ej. esperando autorización de firmas). Default: true */
  publicado?: boolean
}

const todosLosLibros: Libro[] = [
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
  {
    id: "3",
    titulo: "Materia, materiales, materialismo. Reflexiones bibliológicas para una crítica literaria",
    autores: [
      "Miguel Ángel Hernández Acosta (coordinador)",
      "Alfredo Léal (coordinador)",
      "Hernán Maltz",
      "Emiliano Sánchez Narvarte",
      "Paula Andrea Marín-Colorado",
      "Ana Elisa Ribeiro",
      "Santiago Vera Cubas",
      "Manuel Barrós",
      "Kena Kitchengs",
      "Luz Midilia Marroquín Franco",
      "Sarah E. L. Bowskill",
    ],
    anio: 2026,
    portada: "/covers/libro-MMM.jpg",
    resumen:
      "«En la actualidad, cuando la ciudad letrada ha disminuido su población (o eso se han encargado de señalar las y los especialistas), el libro, sus formas de consumo y las prácticas que genera se vuelven necesarias de estudiar. ¿Cambia un ejemplar cuando se ubica en una librería a cuando está en un hogar o en una biblioteca? ¿Es el mismo si se le lee como si perteneciera a un género u otro? ¿La reducción en la cantidad de venta de libros significa una reducción en el consumo de objetos de lectura? ¿La textualidad electrónica produce lectores de otro tipo a los que tenían las textualidades de papel?» (Miguel Ángel Hernández Acosta)\n\nEste libro es producto de las primeras Jornadas Interdisciplinarias de Bibliología Crítica para la Literatura, llevadas a cabo en enero de 2025 en el marco del Seminario Interdisciplinario de Bibliología (IIB – UNAM). Reúne a una nómina internacional de investigadorxs de distintas universidades —en su mayoría del Sur Global— que se plantean estas y otras preguntas mediante el estudio crítico de la producción editorial latinoamericana del siglo XX y lo que va del XXI. Sus páginas ofrecen pasajes de una rigurosidad y originalidad sobresalientes en el campo de los estudios del libro y la edición, que invitan a seguir debatiendo sobre lo que son (y no) los libros.",
    tematicas: ["Bibliología", "Crítica Literaria", "Historia del Libro", "Edición"],
    coleccion: "Literarias",
    isbn: "978-631-91361-2-8",
    paginas: 257,
    formatos: [
      { tipo: "PDF", url: "/downloads/Materia-materiales-materialismo.pdf", size: "4.9MB" },
    ],
    openAccess: true,
    publicado: false, // oculto: esperando autorización de firmas
  },
  {
    id: "4",
    titulo: "Las hormigas",
    autores: ["Alfredo Léal"],
    anio: 2026,
    portada: "/covers/libro-las-hormigas.jpg",
    resumen:
      "Preguntándose cómo escribir la historia de un actor de doblaje cuya muerte lo marca para siempre, un escritor —que puede o no ser el que firma el libro intitulado Las hormigas— va haciendo bocetos de episodios, tramas, personajes. Por momentos, parece que va a conseguirlo, es decir, que va a poder narrar como se espera que se narre. En ocasiones, en cambio, simplemente se detiene, vuelve sobre sus pasos, se arrepiente. Igual que el camino que van haciendo las hormigas cuando aparecen en un hogar, sin razón aparente, y no lo abandonan hasta que no han conseguido lo que sea que buscaran, en este libro las palabras van sumándose a un plan del que poco saben, borrando al mismo tiempo autor y trama. Y, sin embargo, como las hormigas, el camino está ahí, la nouvelle está ahí.\n\nAlfredo Léal (San Pedro Mártir, 1985). Escritor, traductor, docente, actor y papá. Doctor en Estudios Latinoamericanos por la UNAM, donde se graduó de Maestro y Licenciado en Letras Modernas Francesas. Autor de numerosos artículos académicos y ensayísticos, recientemente ha publicado su traducción de la poesía completa de Marie Krysinska, reunida por vez primera en el volumen La voz y la música (Universidad Iberoamericana / Elefanta, 2026); el libro de cuentos El último futbolista sin tatuajes (UANL, 2025); y el libro de crítica literaria Dar (el) nombre. Notas de trabajo en torno a las relaciones entre autor y editor en Occidente (UTADEO, 2025). Su obra ha sido publicada en Alemania, Colombia, México y, ahora, Argentina.",
    tematicas: ["Literatura", "Nouvelle", "Narrativa"],
    coleccion: "Literarias",
    isbn: "978-631-91361-3-5",
    paginas: 60,
    formatos: [
      { tipo: "PDF", url: "/downloads/Las-hormigas.pdf", size: "3.7MB" },
    ],
    openAccess: true,
  },
]

export const libros: Libro[] = todosLosLibros.filter((libro) => libro.publicado !== false)
