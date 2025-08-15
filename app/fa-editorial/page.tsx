import RotatingText from "@/components/RotatingText"

export default function FAEditorialHomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-foreground mb-8">
          <RotatingText
            texts={["FA revista"]}
            rotationInterval={3000}
            splitBy="characters"
            staggerDuration={0.1}
            mainClassName="text-8xl font-bold"
            elementLevelClassName="text-8xl font-bold"
          />
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Editorial académica digital del Instituto Florentino Ameghino
        </p>
      </div>
    </div>
  )
}
