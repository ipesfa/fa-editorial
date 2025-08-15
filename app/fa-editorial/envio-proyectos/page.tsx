import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Mail, FileText, User, BookOpen, Send } from "lucide-react"

export default function EnvioProyectosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Cómo Publicar
              </h1>
              <div className="w-24 h-px bg-border mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify">
                Para presentar tu original a FA Editorial, debés completar el formulario y enviarlo por correo a{" "}
                <a 
                  href="mailto:faeditorial@ipesfa-ushuaia.edu.ar" 
                  className="text-[#D4C078] hover:underline font-medium"
                >
                  faeditorial@ipesfa-ushuaia.edu.ar
                </a>
              </p>
              <p className="text-base text-muted-foreground mt-4 text-justify">
                Realizaremos una evaluación del proyecto y nos pondremos en contacto para informarte acerca de los pasos a seguir.
              </p>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#D4C078] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-black" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                  FA Ediciones
                </h2>
                <p className="text-lg text-muted-foreground">Colección: Prácticas y Saberes</p>
                <h3 className="text-xl font-semibold text-foreground mt-4">
                  Formulario de presentación de propuestas
                </h3>
                <p className="text-sm text-muted-foreground mt-2 text-justify">
                  Para la instancia de presentación, se requiere completar todos los ítems que se detallan a continuación. 
                  El presente formulario junto con el CV de lxs Docentes Responsables del proyecto deberá ser enviado a la Jefatura de Investigación.
                </p>
              </div>

              <form className="space-y-8">
                {/* Datos del Docente Responsable */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <User className="w-5 h-5 text-[#D4C078] mr-2" />
                    <h4 className="font-semibold text-lg text-foreground">
                      Datos de la/del Docente Responsable
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Apellido y Nombre/s *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        DNI *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Domicilio Legal *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Autores */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-[#D4C078] mr-2" />
                    <h4 className="font-semibold text-lg text-foreground">
                      Nombre y apellido de autorxs, compiladorxs, coordinadorxs, editorxs
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Apellido y Nombre/s
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Carácter de la participación
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent">
                          <option value="">Seleccionar...</option>
                          <option value="autor">Autor/a</option>
                          <option value="compilador">Compilador/a</option>
                          <option value="coordinador">Coordinador/a</option>
                          <option value="editor">Editor/a</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          DNI
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        />
                      </div>
                    </div>
                    {/* Botón para agregar más autores */}
                    <button
                      type="button"
                      className="text-[#D4C078] hover:text-[#B8A868] font-medium text-sm flex items-center"
                    >
                      <span className="mr-1">+</span>
                      Agregar otro autor
                    </button>
                  </div>
                </div>

                {/* Propuesta de libro */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-4">
                    Propuesta de libro para la Colección Prácticas y Saberes
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Descripción y justificación de la relevancia de la propuesta (hasta 2.000 caracteres) *
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        placeholder="Breve justificación de la relevancia de la propuesta en relación a su aporte a los procesos de formación. Vacancia de bibliografía disponible o de perspectivas de encuadre específicas respecto de las temáticas/problemáticas a abordar."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Objetivos de la propuesta
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        placeholder="Objetivos generales del trabajo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Palabras Clave (Hasta 5 palabras clave)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        placeholder="Ej: educación, formación docente, práctica pedagógica"
                      />
                    </div>
                  </div>
                </div>

                {/* Autores participantes */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-4">
                    Autores/as, asignaturas y profesorados participantes
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Apellido y Nombre
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Asignatura
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Profesorado
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-[#D4C078] hover:text-[#B8A868] font-medium text-sm flex items-center"
                    >
                      <span className="mr-1">+</span>
                      Agregar otro participante
                    </button>
                  </div>
                </div>

                {/* Título e índice */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Título sugerido *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subtítulo (optativo)
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Índice tentativo *
                      </label>
                      <textarea
                        rows={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        placeholder="Presentar el índice tentativo del libro, especificando el nombre de cada capítulo y, en cada uno de ellos, un breve resumen."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Bibliografía básica de referencia o relacionada
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                        placeholder="Listar las principales referencias bibliográficas que sustentan la propuesta"
                      />
                    </div>
                  </div>
                </div>

                {/* ANEXO */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-4">
                    ANEXO: Mini CV con lxs autorxs
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Que incluya formación, espacios y asignaturas de dictado de clases y producciones más relevantes
                  </p>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4C078] focus:border-transparent"
                    placeholder="Describa brevemente su formación académica, experiencia docente y principales publicaciones o trabajos realizados"
                  />
                </div>

                {/* Botón de envío */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#D4C078] text-black px-8 py-4 text-base font-semibold hover:bg-[#B8A868] transition-all duration-300 tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Enviar propuesta
                  </button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Al enviar este formulario, aceptás que tus datos sean procesados según nuestra política de privacidad.
                  </p>
                </div>
              </form>
            </div>

            {/* Información adicional */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-[#D4C078] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  ¿Tenés alguna pregunta?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Si necesitás más información sobre el proceso de publicación o tenés dudas sobre el formulario, 
                  no dudes en contactarnos.
                </p>
                <a
                  href="mailto:faeditorial@ipesfa-ushuaia.edu.ar"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-base font-semibold hover:bg-[#D4C078] hover:text-black transition-all duration-300 tracking-wide rounded-lg"
                >
                  <Mail className="w-4 h-4" />
                  Contactar por email
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
