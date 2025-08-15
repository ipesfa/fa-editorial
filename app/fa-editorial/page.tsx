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
        <section className="relative bg-white py-12 sm:py-16 lg:py-20 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-14">
                <Image
                  src="/fa-editorial-logo 2.png"
                  alt="FA Editorial Logo"
                  width={300}
                  height={300}
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain"
                />
                <div className="flex items-center">
                  <TextType
                    text="EDITORIAL"
                    as="h1"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E6D690] uppercase tracking-wider"
                    typingSpeed={100}
                    initialDelay={500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName=""
                    loop={false}
                  />
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto mt-16 sm:mt-20 lg:mt-32 px-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
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
