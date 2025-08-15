export interface Coleccion {
  id: string
  nombre: string
  descripcion: string
  slug: string
}

export const colecciones: Coleccion[] = [
  {
    id: "1",
    nombre: "Prácticas y Saberes",
    descripcion: "El objetivo es intervenir en el debate del campo educativo desde la producción y reflexión teórica, sin desatender los dilemas de la práctica docente cotidiana. En este sentido, procura dar cuenta de reflexiones teóricas de la educación, de la formación docente, al tiempo que considera central recuperar las ideas y los saberes que emergen de la práctica. Por ello se interpela a rearticular las experiencias y vivencias surgidas de la práctica docente como fundamento de la elaboración de reflexiones sobre lo educativo.",
    slug: "practicas-y-saberes",
  },
  {
    id: "2",
    nombre: "Materiales Educativos",
    descripcion: "El objetivo es construir un espacio de producción de materiales que puedan ser utilizados en la organización de la práctica y formación docente. Recursos didácticos que, en una trama informativa contemporánea dominada por múltiples discursos, la reconfiguración de las industrias culturales y procesos comunicacionales digitales, superen nociones técnicas y articulen distintos lenguajes en pos de potenciar los procesos formativos.",
    slug: "materiales-educativos",
  },
  {
    id: "3",
    nombre: "Historia(s)",
    descripcion: "El objetivo es promover estudios, trabajos y reflexiones en torno a lo histórico, entendido desde múltiples perspectivas y escalas. La pregunta por la historia desde lo local, lo nacional y transnacional, el lugar de lo latinoamericano en el discurso histórico. Al mismo tiempo, se propone como un espacio de visibilización de debates epistemológicos y teóricos sobre la producción de conocimiento histórico, sobre sus fuentes y estrategias metodológicas.",
    slug: "historias",
  },
  {
    id: "4",
    nombre: "Literarias",
    descripcion: "El objetivo es impulsar la producción de textos ficcionales (desde la poesía a la novela, desde los cuentos a las crónicas), como así también configurar un espacio para la reflexión teórica sobre la literatura. Al respecto, la literatura, en un sentido que amplía los límites estrechos del género, se vincula con el mundo social y cultural, político e ideológico. Es por ello que busca fomentar la producción de teoría literaria, de crítica y la reflexión estética cuyo objeto central sea la ficción.",
    slug: "literarias",
  },
  {
    id: "5",
    nombre: "Culturas",
    descripcion: "El objetivo es fomentar la publicación de investigaciones, reflexiones y estudios que se ocupen de los dilemas culturales, artísticos e ideológicos contemporáneos. La pluralidad de producciones e intervenciones simbólicas en el espacio público, los múltiples agentes, las prácticas y demandas emergentes, las cambiantes coyunturas como también aquello que en los cambios de contexto perdura, invita a no desatender las configuraciones sociales y políticas que se despliegan en el escenario de la vida cotidiana.",
    slug: "culturas",
  },
  {
    id: "6",
    nombre: "Lenguajes",
    descripcion: "El objetivo es convocar a estudiar e investigar sobre la matemática y el inglés como los lenguajes en un sentido amplio: como mediación simbólica de lo real, como código cultural desde el cual interpretar la realidad, como una modalidad de organizar y clasificar la cultura. Desde esta perspectiva, tanto son implican el dominio de un código, de un saber y al mismo tiempo una experiencia social. Profundizar en el conocimiento académico de estos lenguajes fortalece las prácticas, los vínculos y las maneras de comprender el mundo. Comprender sus lógicas y estructuras, su organización e implicancias cotidianas se revelan como un reto intelectual de primer orden.",
    slug: "lenguajes",
  },
  {
    id: "7",
    nombre: "Territorios y biodiversidad",
    descripcion: "El objetivo es interpelar a producir saberes y conocimientos acerca de la organización de la territorialidad en sus múltiples dimensiones: geográfica, geopolítica y desde la biodiversidad. El universo de la biología, los desarrollos científicos vinculados a ella y su impacto en la sociedad son fundamentales. La política y los intereses económicos suelen pensar en la biodiversidad como recursos. ¿Cómo repensar las geografías, las fronteras, los límites ante los actuales dilemas y conflictos transnacionales? ¿De qué modo las luchas y demandas por mejoras en el buen vivir invitan a pensar nuevos modos de pensarnos y relacionarnos con la biodiversidad?",
    slug: "territorios-y-biodiversidad",
  },
  {
    id: "8",
    nombre: "Educación en debate",
    descripcion: "El objetivo es intervenir desde la producción de saberes en el efervescente campo de la educación. El devenir no lineal de las políticas culturales y educativas transforman la vida institucional, la gestión y las relaciones entre docentes y entre docentes y estudiantes. Al mismo tiempo, el campo de la educación está atravesado por dilemas sobre las relaciones pedagógicas, la organización curricular, psicopedagógicas y la producción de subjetividades en un contexto en el que los sujetos son interpelados desde múltiples discursos. Nuevas preguntas emergen ante las transformaciones tras los importantes procesos de inclusión educativa, que interrogan a la formación docente, su actualización teórica y a las perspectivas epistemológicas desde las cuales ingresamos al aula.",
    slug: "educacion-en-debate",
  },
]
