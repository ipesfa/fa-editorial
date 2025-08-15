"use client"

import Link from "next/link"
import Image from "next/image"
import { autores } from "@/data/autores"

export function AuthorsGrid() {
  const featuredAuthors = autores.slice(0, 4)

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-sans text-5xl lg:text-6xl font-light text-black tracking-tight">Autores</h2>
            <Link
              href="/fa-editorial/autores"
              className="text-gray-600 hover:text-[#D4C078] transition-colors duration-200 text-2xl font-medium group"
            >
              Ver todos los autores
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200 text-3xl">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAuthors.map((autor, index) => (
              <Link key={autor.id} href={`/fa-editorial/autores/${autor.id}`} className="group block">
                <div className="rounded-2xl p-6 h-64 flex flex-col justify-center items-center text-center transition-all duration-300 bg-white/80 backdrop-blur-sm text-black hover:bg-white hover:shadow-md hover:border hover:border-[#E6D690]/30">
                  {/* Author Image or Initials */}
                  <div className="mb-4">
                    {autor.foto ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={autor.foto || "/placeholder.svg"}
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
                    {autor.especialidad || "AUTOR"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
