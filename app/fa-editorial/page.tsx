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
        {/* Hero Section */}
        <section className="relative bg-white py-4 sm:py-6 lg:py-8 min-h-[90vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 space-y-3 sm:space-y-0 sm:space-x-8 lg:space-x-14">
                <Image
                  src="/fa-editorial-logo 2.png"
                  alt="FA Editorial Logo"
                  width={300}
                  height={300}
                  className="w-52 h-52 sm:w-68 sm:h-68 lg:w-76 lg:h-76 object-contain"
                />
                <div className="flex items-center">
                  <TextType
                    text="EDITORIAL"
                    as="h1"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#E6D690] uppercase tracking-wider"
                    typingSpeed={100}
                    initialDelay={500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName=""
                    loop={false}
                  />
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed">
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
