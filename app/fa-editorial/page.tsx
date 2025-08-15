"use client";

import { SiteHeader } from '@/components/site-header';
import { HighlightsSection } from '@/components/highlights-section';
import { CollectionsTiles } from '@/components/collections-tiles';
import { AuthorsGrid } from '@/components/authors-grid';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import TextType from '@/components/TextType';

export default function FAEditorialHomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section - Optimizado para móvil */}
        <section className="relative bg-white py-8 sm:py-12 lg:py-16 min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              {/* Logo y texto - Layout mejorado para móvil */}
              <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <Image
                  src="/fa-editorial-logo 2.png"
                  alt="FA Editorial Logo"
                  width={300}
                  height={300}
                  className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-76 xl:h-76 object-contain"
                  priority
                />
                <div className="flex items-center justify-center">
                  <TextType
                    text="EDITORIAL"
                    as="h1"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-[#E6D690] uppercase tracking-wider"
                    typingSpeed={100}
                    initialDelay={500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName=""
                    loop={false}
                  />
                </div>
              </div>
              
              {/* Texto descriptivo - Mejorado para móvil */}
              <div className="max-w-2xl sm:max-w-3xl mx-auto mt-6 sm:mt-8 lg:mt-10 px-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                  Descubrí las mejores publicaciones académicas y culturales
                </p>
              </div>
            </div>
          </div>
        </section>

        <HighlightsSection />
        <CollectionsTiles />
        <AuthorsGrid />
      </main>
      <SiteFooter />
    </>
  );
}
