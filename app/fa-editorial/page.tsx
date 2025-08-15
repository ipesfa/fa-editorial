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
        <section className="relative bg-white py-20 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/fa-editorial-logo 2.png"
                  alt="FA Editorial Logo"
                  width={300}
                  height={300}
                  className="w-72 h-72 object-contain mr-14"
                />
                <div className="flex items-center">
                  <TextType
                    text="EDITORIAL"
                    as="h1"
                    className="text-7xl lg:text-8xl font-bold text-[#E6D690] uppercase tracking-wider"
                    typingSpeed={100}
                    initialDelay={500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName=""
                    loop={false}
                  />
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto mt-32">
                <p className="text-xl text-gray-600 mb-8">
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
