export interface Autor {
  id: string
  nombre: string
  area: string
  bioCorta: string
  foto?: string
}

export const autores: Autor[] = [
  {
    id: "1",
    nombre: "Dr. María González",
    area: "Metodología de la Investigación",
    bioCorta: "Doctora en Ciencias Sociales con especialización en metodologías cualitativas y cuantitativas.",
    foto: "/profesora-doctora-maria-gonzalez.png",
  },
  {
    id: "2",
    nombre: "Prof. Carlos Rodríguez",
    area: "Estadística Aplicada",
    bioCorta: "Profesor titular especializado en análisis estadístico y métodos de investigación cuantitativa.",
    foto: "/profesor-estadistica.png",
  },
  {
    id: "3",
    nombre: "Dra. Ana Martínez",
    area: "Historia del Arte",
    bioCorta: "Historiadora del arte especializada en movimientos artísticos latinoamericanos contemporáneos.",
    foto: "/doctora-ana-martinez-historia-arte.png",
  },
  {
    id: "4",
    nombre: "Dr. Luis Fernández",
    area: "Políticas Públicas",
    bioCorta: "Especialista en diseño y evaluación de políticas públicas para el desarrollo sostenible.",
    foto: "/doctor-luis-fernandez-politicas-publicas.png",
  },
  {
    id: "5",
    nombre: "Mg. Patricia Silva",
    area: "Desarrollo Sostenible",
    bioCorta: "Magíster en Desarrollo Sostenible con experiencia en proyectos ambientales y sociales.",
    foto: "/magister-patricia-silva-desarrollo-sostenible.png",
  },
  {
    id: "6",
    nombre: "Dra. Carmen López",
    area: "Psicología Educativa",
    bioCorta: "Psicóloga educativa especializada en procesos de aprendizaje y desarrollo cognitivo.",
    foto: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "7",
    nombre: "Dr. Roberto Jiménez",
    area: "Economía Digital",
    bioCorta: "Economista especializado en transformación digital y nuevos modelos económicos.",
    foto: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "8",
    nombre: "Dra. Isabel Moreno",
    area: "Sociología de la Tecnología",
    bioCorta: "Socióloga especializada en el impacto social de las tecnologías emergentes.",
    foto: "/placeholder.svg?height=200&width=200",
  },
]
