import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CertamenNiniBernardelloPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="relative py-12 sm:py-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E6D690]/20 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <header className="relative mb-6 sm:mb-8">
                {/* Versión visible en móvil */}
                <div className="md:hidden grid place-items-center">
                  <span className="inline-flex px-4 py-1.5 rounded-full bg-[#E6D690] text-black text-sm font-semibold tracking-wide shadow-sm ring-1 ring-black/5">
                    Bases, condiciones y cronograma de participación
                  </span>
                </div>
              </header>

              {/* Imagen destacada del certamen */}
              <div className="relative mb-10 sm:mb-12">
                <div className="grid place-items-center sm:place-items-start">
                  <div className="relative w-full max-w-md sm:max-w-lg">
                    <div className="absolute -inset-3 sm:-inset-4 rounded-2xl bg-[#E6D690]/30 blur-xl" />
                    <Image
                      src="/1er_Certamen.png"
                      alt="1er Certamen Provincial de Literatura Niní Bernardello"
                      width={1200}
                      height={800}
                      className="relative rounded-2xl shadow-xl ring-1 ring-[#E6D690]/60 rotate-1 sm:rotate-2"
                      priority
                    />
                    {/* Etiqueta rotada, anclada a la imagen para asegurar visibilidad */}
                    <div className="hidden md:flex items-center gap-2 absolute -left-24 lg:-left-40 top-[70%] translate-x-0 -translate-y-1/2 -rotate-[75deg] origin-left z-20">
                      <span className="inline-flex px-4 py-1.5 rounded-full bg-[#E6D690] text-black text-sm md:text-base font-semibold tracking-wider uppercase shadow-md ring-1 ring-black/10 whitespace-nowrap">
                        Bases, condiciones y cronograma de participación
                      </span>
                    </div>
                  </div>
                </div>
                {/* Versión flotante decorativa en desktop */}
                <div className="hidden lg:block absolute -top-8 -right-24">
                  <Image
                    src="/1er_Certamen.png"
                    alt="Afiche del certamen"
                    width={220}
                    height={220}
                    className="rounded-xl shadow-2xl ring-1 ring-black/10 -rotate-6 opacity-90"
                  />
                </div>
              </div>

              <div className="space-y-8">
                {/* Categorías y extensión */}
                <section className="rounded-2xl border border-[#E6D690] bg-white/90 backdrop-blur p-5 sm:p-6 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">Categorías y extensión de las obras</h2>
                  <div className="space-y-4 text-black/90">
                    <div>
                      <h3 className="font-medium">Poemas</h3>
                      <ul className="list-disc pl-5 leading-7">
                        <li>Mínimo: 10 versos</li>
                        <li>Máximo: 50 versos</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium">Narrativa breve</h3>
                      <ul className="list-disc pl-5 leading-7">
                        <li>Cuentos: hasta 20 páginas</li>
                        <li>Novelas: hasta 200 páginas</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-[#E6D690]/60" />

                {/* Fechas importantes */}
                <section className="rounded-2xl border border-[#E6D690] bg-white/90 backdrop-blur p-5 sm:p-6 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">Fechas importantes</h2>
                  <ul className="list-disc pl-5 space-y-2 text-black/90">
                    <li>Recepción de originales: del 1° al 30 de abril de 2026</li>
                    <li>Período de evaluación: mayo a agosto de 2026</li>
                    <li>Comunicación de resultados: septiembre de 2026</li>
                    <li>Entrega de premios: octubre de 2026</li>
                  </ul>
                </section>

                <div className="h-px bg-[#E6D690]/60" />

                {/* Condiciones para presentarse */}
                <section className="rounded-2xl border border-[#E6D690] bg-white/90 backdrop-blur p-5 sm:p-6 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">Condiciones para presentarse</h2>
                  <div className="space-y-4 text-black/90">
                    <div>
                      <h3 className="font-medium">Podrán participar:</h3>
                      <ul className="list-disc pl-5 leading-7">
                        <li>Escritorxs residentes en Tierra del Fuego</li>
                        <li>Mayores de 16 años</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium">Condiciones de la obra:</h3>
                      <ul className="list-disc pl-5 leading-7">
                        <li>Tema libre</li>
                        <li>Obra inédita</li>
                        <li>La obra no debe tener compromisos editoriales previos</li>
                        <li>La obra no debe encontrarse pendiente de resolución en otros concursos</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-[#E6D690]/60" />

                {/* Aspectos formales */}
                <section className="rounded-2xl border border-[#E6D690] bg-white/90 backdrop-blur p-5 sm:p-6 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">Aspectos formales de presentación</h2>
                  <ul className="list-disc pl-5 space-y-1 text-black/90">
                    <li>Formato de página: Hoja A4</li>
                    <li>Tipografía: Times New Roman, tamaño 12</li>
                    <li>Interlineado: 1,5</li>
                    <li>Márgenes: preestablecidos del documento (configuración estándar)</li>
                  </ul>
                  <p className="mt-3 text-black/80">
                    Las obras deberán enviarse en archivo digital (por ejemplo, PDF o Word) adjunto al correo electrónico junto con los datos solicitados en el cuerpo del mensaje.
                  </p>
                </section>

                <div className="h-px bg-[#E6D690]/60" />

                {/* Datos a incluir */}
                <section className="rounded-2xl border border-[#E6D690] bg-white/90 backdrop-blur p-5 sm:p-6 shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold text-black mb-3">Datos a incluir en el cuerpo del correo electrónico</h2>
                  <p className="text-black/80 mb-3">Al momento de enviar la obra, se solicita incluir en el cuerpo del correo:</p>
                  <ul className="list-disc pl-5 space-y-1 text-black/90">
                    <li>Nombre y apellido (tal como figura en el DNI)</li>
                    <li>N.º de documento</li>
                    <li>Domicilio y lugar de residencia, localidad y distrito</li>
                    <li>Teléfono de contacto</li>
                    <li>Título de la obra (y seudónimo, en caso de que se decida utilizarlo)</li>
                    <li>Fecha de nacimiento</li>
                  </ul>
                </section>

                {/* Contacto */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-black/80">
                    Consultas: <a href="mailto:certamenliterario@ipesfa-ushuaia.edu.ar" className="underline decoration-[#E6D690] underline-offset-4 hover:text-black">certamenliterario@ipesfa-ushuaia.edu.ar</a>
                  </p>
                  <Link
                    href="/fa-editorial"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium tracking-wide text-black border border-[#E6D690] hover:bg-black hover:text-[#E6D690] transition-colors rounded-xl shadow-sm"
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
