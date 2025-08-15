import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HighlightsSection } from "@/components/highlights-section"
import { CollectionsTiles } from "@/components/collections-tiles"
import { AuthorsGrid } from "@/components/authors-grid"
import { SiteFooter } from "@/components/site-footer"

export default function FAEditorialHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <HighlightsSection />
        <CollectionsTiles />
        <AuthorsGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
