import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Send, Download } from "lucide-react"

export function ForAuthorsCard() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Envío de proyectos</h2>
            <div className="w-24 h-px bg-border mx-auto"></div>
          </div>

          {/* Contenido principal */}
          <div className="bg-secondary rounded-lg p-8 lg:p-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">¿Tenés un proyecto editorial?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Invitamos a investigadores y académicos a enviar sus propuestas editoriales. Conoce nuestras
                  directrices y proceso de evaluación para formar parte de nuestro catálogo.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/fa-editorial/directrices">
                    <FileText className="w-4 h-4 mr-2" />
                    Ver directrices
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="/fa-editorial/envio-proyectos">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar propuesta
                  </Link>
                </Button>
              </div>

              {/* Link adicional */}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/fa-editorial/plantilla-propuesta.pdf"
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 underline-animated"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar plantilla de propuesta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
