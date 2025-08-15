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
    nombre: "Miguel Fanchovich",
    area: "Profesor de Lengua, Literatura y Latín",
    bioCorta: "Profesor especializado en Lengua, Literatura y Latín con amplia experiencia en la enseñanza de las humanidades.",
    foto: "👤",
  },
  {
    id: "2",
    nombre: "Emiliano Sánchez Narvarte",
    area: "Doctor en Comunicación",
    bioCorta: "Doctor en Comunicación con especialización en medios digitales y comunicación estratégica.",
    foto: "👤",
  },
  {
    id: "3",
    nombre: "Mariano Malizia",
    area: "Profesor en Ciencias Antropológicas",
    bioCorta: "Profesor en Ciencias Antropológicas con enfoque en estudios culturales y sociales.",
    foto: "👤",
  },
  {
    id: "4",
    nombre: "Larrondo Luciana Helena",
    area: "Licenciada en Educación Secundaria",
    bioCorta: "Licenciada en Educación Secundaria con experiencia en pedagogía y formación docente.",
    foto: "👤",
  },
]
