import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Users, BookOpen, Award, Globe, Eye, Share2, Monitor } from "lucide-react"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/fa-editorial"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quienes Somos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">
                FA Editorial se propone visibilizar y jerarquizar la producción cultural del Instituto Florentino Ameghino, 
                promoviendo la democratización del conocimiento a través de publicaciones digitales gratuitas.
              </p>
              <div className="w-24 h-px bg-border mx-auto mt-8"></div>
            </div>

            {/* Contenido principal */}
            <div className="space-y-16 mb-16">
              {/* Propósito */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Eye className="w-6 h-6 text-black" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      Nuestro Propósito
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-lg leading-relaxed mb-6 text-justify">
                      FA Editorial se propone visibilizar y jerarquizar la producción cultural llevada adelante por el equipo docente que compone el Instituto Florentino Ameghino. Una institución educativa de nivel superior debe promover de forma activa las reflexiones teóricas, educativas, los resultados de las investigaciones individuales y colectivas, como también la elaboración artística y cultural.
                    </p>
                    <p className="text-lg leading-relaxed text-justify">
                      Ello permite establecer articulaciones estratégicas con distintas franjas de la sociedad: instituciones educativas en sus múltiples niveles, movimientos sociales, culturales, organismos públicos y privados.
                    </p>
                  </div>
                </div>
              </div>

              {/* El libro como dispositivo mediador */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <BookOpen className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    El Libro como Dispositivo Mediador
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6 text-justify">
                    El libro, históricamente, se ha configurado como el dispositivo mediador clave y por excelencia entre las instituciones educativas y los miembros de la sociedad con quienes desea interactuar. Una editorial es una manera de participar activa y creativamente en los debates intelectuales, culturales y académicos contemporáneos.
                  </p>
                  <p className="text-lg leading-relaxed text-justify">
                    De manera complementaria, entendemos que democratizar la producción de conocimiento es un principio fundamental de la educación pública y de calidad.
                  </p>
                </div>
              </div>

              {/* Proceso de evaluación */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      Proceso de Evaluación Académica
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-lg leading-relaxed text-justify">
                      Para FA Editorial es sustancial que todas las producciones sigan un proceso de evaluación académica (conformado por docentes de la institución y externos) que considere el impacto, la relevancia, su aporte (histórico, artístico, didáctico o teórico) al campo de conocimiento en que el material se inscriba, su actualidad e innovación.
                    </p>
                  </div>
                </div>
              </div>

              {/* Publicaciones digitales */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Monitor className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Publicaciones Digitales y Gratuitas
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6 text-justify">
                    Las publicaciones son digitales y gratuitas. Se trata de acentuar el valor de la circulación de las ideas y la visibilización de la producción académica y cultural del Instituto con una mirada atenta sobre la biodiversidad.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-justify">
                    Al mismo tiempo, las transformaciones en la producción editorial, atravesada por procesos de digitalización de lo cultural y de economía de plataformas, el acceso a los saberes se ve garantizado mediante su circulación en formato digital en tanto puede ser leído en múltiples dispositivos.
                  </p>
                  <p className="text-lg leading-relaxed text-justify">
                    La segmentación del mercado editorial a escala nacional e internacional, los problemas de distribución, han puesto en crisis a los grandes sellos editoriales.
                  </p>
                </div>
              </div>

              {/* Filosofía */}
              <div className="bg-black text-white rounded-3xl p-8 lg:p-12 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Share2 className="w-6 h-6 text-black" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold">
                      Nuestra Filosofía
                    </h2>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed text-justify">
                    En esa trama, se trata de poner de relieve que lo importante es que circulen las ideas y no simplemente los libros.
                  </p>
                </div>
              </div>
            </div>

            {/* Equipo */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Nuestro Equipo
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Dirección Editorial
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Nuestro equipo editorial está compuesto por profesionales especializados en diferentes áreas del conocimiento, comprometidos con la excelencia académica y la democratización del saber.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Evaluación Académica
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Contamos con un comité de evaluación conformado por docentes de la institución y expertos externos que garantizan la calidad y relevancia de todas nuestras publicaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="text-center mt-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-[#D4C078] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Contacto
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify mb-4">
                Para más información sobre nuestras publicaciones o para proponer nuevos proyectos editoriales, no dudes en contactarnos.
              </p>
              <div className="mt-6">
                <a 
                  href="mailto:faeditorial@ipesfa-ushuaia.edu.ar" 
                  className="text-[#D4C078] hover:text-[#B8A868] font-medium text-lg hover:underline transition-colors duration-200"
                >
                  faeditorial@ipesfa-ushuaia.edu.ar
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
