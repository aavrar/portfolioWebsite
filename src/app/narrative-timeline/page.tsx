import { ChapterNavigation } from "@/components/demo/ChapterNavigation"
import { StoryHero } from "@/components/demo/StoryHero"
import { CharacterDevelopment } from "@/components/demo/CharacterDevelopment"
import { PlotTwistProjects } from "@/components/demo/PlotTwistProjects"
import { StoryProgressBar } from "@/components/demo/StoryProgressBar"

export default function NarrativeTimelineDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StoryProgressBar />
      <ChapterNavigation />
      
      <main className="pt-16">
        <StoryHero />
        <CharacterDevelopment />
        <PlotTwistProjects />
      </main>
      
      {/* Demo Notice */}
      <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
        <p className="text-sm font-mono">Narrative Timeline Demo</p>
      </div>
    </div>
  )
}