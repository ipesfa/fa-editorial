"use client"

import Image from "next/image"
import { autores } from "@/data/autores"

export function AuthorsGrid() {
  const featuredAuthors = autores.slice(0, 4)

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-sans text-5xl lg:text-6xl font-light text-black tracking-tight">Autores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAuthors.map((autor, index) => (
              <div key={autor.id} className="group block">
                <div className="rounded-2xl p-6 h-64 flex flex-col justify-center items-center text-center transition-all duration-300 bg-white/80 backdrop-blur-sm text-black hover:bg-white hover:shadow-md hover:border hover:border-[#E6D690]/30">
                  {/* Author Image or Emoji */}
                  <div className="mb-4">
                    {autor.foto && autor.foto.startsWith('👤') ? (
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-gray-100 group-hover:bg-[#E6D690]/20 transition-colors duration-300">
                        {autor.foto}
                      </div>
                    ) : autor.foto ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={autor.foto}
                          alt={`Foto de ${autor.nombre}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium bg-gray-100 group-hover:bg-[#E6D690]/20 transition-colors duration-300">
                        {autor.nombre
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)}
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <h3 className="font-sans text-xl font-medium mb-2 leading-tight">{autor.nombre}</h3>
                  <p className="text-sm font-medium tracking-wider uppercase text-gray-500 group-hover:text-[#D4C078] transition-colors duration-300">
                    {autor.area || "AUTOR"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
