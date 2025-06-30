import { LiteraryHero } from "@/components/demo/LiteraryHero"
import { ManuscriptLayout } from "@/components/demo/ManuscriptLayout"
import { CodePoetrySection } from "@/components/demo/CodePoetrySection"
import { IlluminatedProjects } from "@/components/demo/IlluminatedProjects"

export default function LiteraryFusionDemo() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <ManuscriptLayout>
        <LiteraryHero />
        <CodePoetrySection />
        <IlluminatedProjects />
        
        {/* Demo Notice */}
        <div className="fixed bottom-4 right-4 bg-ink text-parchment px-4 py-2 rounded-lg shadow-lg border border-gold/20">
          <p className="text-sm font-mono">Literary-Code Fusion Demo</p>
        </div>
      </ManuscriptLayout>
    </div>
  )
}