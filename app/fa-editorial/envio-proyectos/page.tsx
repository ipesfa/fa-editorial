import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Mail, FileText, Download, Send } from "lucide-react"

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

            {/* Formulario Simplificado */}
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

              {/* Botones de acción */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ELKsIy7DqdkG08dzPBJJBj20HGKEnlJG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-base font-semibold hover:bg-[#D4C078] hover:text-black transition-all duration-300 tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5" />
                    Descargar formulario
                  </a>
                  <a
                    href="mailto:faeditorial@ipesfa-ushuaia.edu.ar"
                    className="inline-flex items-center justify-center gap-2 bg-[#D4C078] text-black px-8 py-4 text-base font-semibold hover:bg-[#B8A868] transition-all duration-300 tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Enviar propuesta
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Descargá el formulario completo, completalo y enviálo por email a faeditorial@ipesfa-ushuaia.edu.ar
                </p>
              </div>
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
