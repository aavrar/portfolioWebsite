import { V3Hero } from "@/components/v3/V3Hero"
import { V3Navigation } from "@/components/v3/V3Navigation"
import { V3LayeredContent } from "@/components/v3/V3LayeredContent"
import { V3ArchitectureDiagram } from "@/components/v3/V3ArchitectureDiagram"
import { V3TechnicalShowcase } from "@/components/v3/V3TechnicalShowcase"
import { V3LiveCodeDemo } from "@/components/v3/V3LiveCodeDemo"
import { V3MetricsDashboard } from "@/components/v3/V3MetricsDashboard"
import { V3ProcessDocumentation } from "@/components/v3/V3ProcessDocumentation"
import { V3InteractiveDemo } from "@/components/v3/V3InteractiveDemo"
import { V3Contact } from "@/components/v3/V3Contact"

export const metadata = {
  title: "Aahad Vakani - Research-Driven Developer",
  description: "Multidisciplinary developer specializing in AI, NLP, and human-computer interaction. Building thoughtful, user-centered tools that integrate creative storytelling and technical rigor.",
  keywords: "AI developer, NLP, machine learning, full-stack, research, human-computer interaction, procedural narratives",
}

export default function PortfolioV3() {
  return (
    <div className="min-h-screen bg-background">
      <V3Navigation />
      
      <main>
        <V3Hero />
        <V3LayeredContent />
        <V3ArchitectureDiagram />
        <V3TechnicalShowcase />
        <V3LiveCodeDemo />
        <V3MetricsDashboard />
        <V3InteractiveDemo />
        <V3ProcessDocumentation />
        <V3Contact />
      </main>
      
      {/* Version indicator */}
      <div className="fixed bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
        Portfolio v3.0 - Research-Driven Design
      </div>
    </div>
  )
}