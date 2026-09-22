"use client";

import { SiteHeader } from '@/components/site-header';
import { HighlightsSection } from '@/components/highlights-section';
import { CollectionsTiles } from '@/components/collections-tiles';
import { AuthorsGrid } from '@/components/authors-grid';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FAEditorialHomePage() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "EDITORIAL";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section - Optimizado para móvil */}
        <section className="relative bg-white py-8 sm:py-12 lg:py-16 min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              {/* Logo, texto EDITORIAL y descripción - Layout original */}
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Logo y EDITORIAL al lado - Layout horizontal */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                  <Image
                    src="/fa-editorial-logo 2.png"
                    alt="FA Editorial Logo"
                    width={300}
                    height={300}
                    className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-76 xl:h-76 object-contain"
                    priority
                  />
                  <div className="flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-[#E6D690] uppercase tracking-wider">
                      {displayedText}
                      <span className="animate-pulse">|</span>
                    </h1>
                  </div>
                </div>
                
                {/* Texto descriptivo - Tamaño de fuente aumentado */}
                <div className="grid place-items-center">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light text-center">
                    Descubrí las mejores publicaciones académicas y culturales
                  </p>
                </div>
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
