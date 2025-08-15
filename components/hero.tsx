import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="flex flex-col items-center justify-center">
              {/* Logo FA Editorial */}
              <div className="mb-8">
                <Image
                  src="/fa-editorial-logo.png"
                  alt="FA Editorial Logo"
                  width={300}
                  height={200}
                  className="w-auto h-32 lg:h-40 object-contain"
                />
              </div>

              {/* Tipografía con libros integrados */}
              <h1 className="font-serif text-6xl lg:text-8xl xl:text-9xl font-black text-black leading-none tracking-tight">
                <span className="relative inline-block">
                  F
                  <div className="absolute top-4 left-8 w-4 h-6 lg:w-8 lg:h-12 bg-[#E6D690] rounded-sm transform rotate-12 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  A
                  <div className="absolute top-8 right-4 w-3 h-5 lg:w-6 lg:h-10 bg-[#E6D690] rounded-sm transform -rotate-6 opacity-90"></div>
                </span>
                <span className="mx-8"></span>
                <span className="relative inline-block">
                  E
                  <div className="absolute top-2 left-2 w-3 h-4 lg:w-6 lg:h-8 bg-black rounded-sm transform rotate-45 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  D
                  <div className="absolute top-6 right-6 w-4 h-6 lg:w-8 lg:h-12 bg-[#E6D690] rounded-sm transform -rotate-12 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  I
                  <div className="absolute top-10 left-2 w-3 h-4 lg:w-6 lg:h-8 bg-black rounded-sm transform rotate-24 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  T
                  <div className="absolute top-4 left-4 w-3 h-5 lg:w-6 lg:h-10 bg-[#E6D690] rounded-sm transform rotate-18 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  O
                  <div className="absolute top-8 right-2 w-4 h-6 lg:w-8 lg:h-12 bg-black rounded-sm transform -rotate-15 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  R
                  <div className="absolute top-2 left-1 w-3 h-4 lg:w-6 lg:h-8 bg-[#E6D690] rounded-sm transform rotate-30 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  I
                  <div className="absolute top-6 right-4 w-3 h-5 lg:w-6 lg:h-10 bg-black rounded-sm transform -rotate-20 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  A
                  <div className="absolute top-10 left-6 w-4 h-6 lg:w-8 lg:h-12 bg-[#E6D690] rounded-sm transform rotate-8 opacity-90"></div>
                </span>
                <span className="relative inline-block">
                  L
                  <div className="absolute top-4 right-2 w-3 h-5 lg:w-6 lg:h-10 bg-black rounded-sm transform -rotate-10 opacity-90"></div>
                </span>
              </h1>
            </div>
          </div>

          {/* Subtítulo minimalista */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Publicaciones académicas y contenido especializado del IPES FA
          </p>

          {/* Botón simple */}
          <Button
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-[#E6D690] hover:border-[#E6D690] hover:text-black transition-all duration-300 px-8 py-3 text-base bg-transparent rounded-none"
            asChild
          >
            <Link href="#featured">Explorar publicaciones</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
