"use client";

import { SiteHeader } from '@/components/site-header';
import { HighlightsSection } from '@/components/highlights-section';
import { CollectionsTiles } from '@/components/collections-tiles';
import { AuthorsGrid } from '@/components/authors-grid';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function FAEditorialHomePage() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "EDITORIAL";
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  // Abrir popup automáticamente al entrar al home
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {/* Popup Certamen Niní Bernardello */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent
          showCloseButton={false}
          className="max-w-sm rounded-xl p-0 shadow-xl bg-black/95 text-neutral-200 border border-[#E6D690] ring-0 focus:outline-none focus-visible:outline-none top-[25%]"
        >
          <div className="flex items-start gap-3 px-4 py-3">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-[14px] sm:text-[15px] font-semibold text-[#E6D690] tracking-wide leading-snug">
                1er Certamen Provincial de Literatura Niní Bernardello
              </DialogTitle>
              <DialogDescription className="mt-1 text-[13px] text-neutral-300/90 leading-relaxed">
                Bases, condiciones y cronograma de participación.
              </DialogDescription>
              <div className="mt-2">
                <Link href="/certamen-nini-bernardello" className="text-[#E6D690] underline underline-offset-4 decoration-[#E6D690] hover:text-[#d1c07a] text-[13px] inline-flex items-center gap-1">
                  Ver bases y condiciones
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
