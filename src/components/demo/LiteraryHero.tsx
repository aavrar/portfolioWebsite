"use client"

import { useState, useEffect } from "react"
import { TypewriterText } from "./TypewriterText"
import { Button } from "@/components/ui/button"
import { Download, Calendar, Coffee, Code2 } from "lucide-react"

export function LiteraryHero() {
  const [terminalPhase, setTerminalPhase] = useState(0)
  const [showManuscript, setShowManuscript] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setTerminalPhase(1), 1200),
      setTimeout(() => setTerminalPhase(2), 3500), 
      setTimeout(() => setTerminalPhase(3), 6000),
      setTimeout(() => setTerminalPhase(4), 8500),
      setTimeout(() => setShowManuscript(true), 11000),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-ink/10 to-transparent rounded-full blur-xl" />
      </div>

      {/* Enhanced Terminal Section */}
      <div 
        className={`relative max-w-4xl mx-auto mb-16 transition-all duration-1200 ${
          showManuscript ? 'opacity-0 transform scale-95 -translate-y-8' : 'opacity-100'
        }`}
      >
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl border border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">~/portfolio</span>
            </div>
            <Code2 className="w-5 h-5 text-gray-500" />
          </div>
          
          <div className="font-mono space-y-4">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">❯</span>
              <span className="text-gray-300">whoami</span>
            </div>
            
            {terminalPhase >= 1 && (
              <div className="text-green-400 ml-4">
                <TypewriterText text="aahad_vakani: full-stack developer × storyteller" />
              </div>
            )}

            {terminalPhase >= 2 && (
              <>
                <div className="flex items-center mt-6">
                  <span className="text-blue-400 mr-2">❯</span>
                  <span className="text-gray-300">cat ./expertise.json</span>
                </div>
                <div className="text-amber-300 ml-4">
                  <TypewriterText 
                    text={`{
  "education": "CS + English Writing @ DePauw",
  "experience": "2+ years building digital experiences",
  "philosophy": "code as literature, systems as stories"
}`}
                    delay={3500}
                    speed={30}
                  />
                </div>
              </>
            )}

            {terminalPhase >= 3 && (
              <>
                <div className="flex items-center mt-6">
                  <span className="text-blue-400 mr-2">❯</span>
                  <span className="text-gray-300">npm run build-portfolio</span>
                </div>
                <div className="text-cyan-400 ml-4">
                  <TypewriterText 
                    text="✓ Compiling skills into expertise..." 
                    delay={6000}
                  />
                </div>
              </>
            )}

            {terminalPhase >= 4 && (
              <>
                <div className="text-green-400 ml-4 mt-2">
                  <TypewriterText 
                    text="✓ Build complete. Transforming into manuscript..." 
                    delay={8500}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Manuscript Section */}
      <div 
        className={`relative max-w-5xl mx-auto transition-all duration-1200 ${
          showManuscript ? 'opacity-100 transform translate-y-0 manuscript-fade-in' : 'opacity-0 transform translate-y-12'
        }`}
      >
        <div className="manuscript-border manuscript-page rounded-xl p-12 shadow-2xl">
          {/* Ornate Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <h1 className="text-literary-heading text-5xl mb-4 text-ink">
              The Developer's Codex
            </h1>
            <p className="text-ink/70 text-lg italic">
              Chapter I: Where Logic Meets Language
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
          
          {/* Main Content */}
          <div className="text-literary text-ink space-y-8">
            {/* Opening Paragraph with Drop Cap */}
            <div className="relative">
              <span className="text-manuscript-drop-cap text-gold">I</span>
              <p className="text-lg leading-relaxed">
                n the intersection of <code className="bg-ink/10 px-2 py-1 rounded text-code-poetry font-medium">computational thinking</code> and 
                <em className="text-gold font-medium"> creative expression</em>, there exists a unique approach to software development. 
                This portfolio chronicles the journey of someone who refuses to see technology and humanity as separate domains.
              </p>
            </div>
            
            {/* Philosophy Block */}
            <blockquote className="border-l-4 border-gold bg-gold/5 pl-8 py-6 rounded-r-lg">
              <p className="text-xl italic text-ink/90 leading-relaxed">
                "Every function tells a story. Every variable carries meaning. 
                Every algorithm is a narrative waiting to unfold."
              </p>
              <footer className="text-sm text-ink/60 mt-3">— Development Philosophy</footer>
            </blockquote>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <h3 className="text-literary-heading text-2xl text-ink border-b border-gold/30 pb-2">
                  Academic Foundation
                </h3>
                <div className="space-y-3 text-ink/80">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>B.A. Computer Science & English Writing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>DePauw University, Class of 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Honor's Program & Dean's List</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-literary-heading text-2xl text-ink border-b border-gold/30 pb-2">
                  Development Approach
                </h3>
                <div className="space-y-4 text-ink/80">
                  <p>
                    Building systems that don't just function, but <em>communicate</em>. 
                    Technology that speaks the language of its users.
                  </p>
                  <p className="text-sm italic">
                    2+ years crafting full-stack applications with narrative depth.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-gold/20">
              <Button size="lg" className="bg-ink hover:bg-ink/90 text-parchment gap-2">
                <Download className="w-4 h-4" />
                Download Portfolio
              </Button>
              <Button variant="outline" size="lg" className="border-ink text-ink hover:bg-ink/10 gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Interview
              </Button>
              <Button variant="ghost" size="lg" className="text-ink/70 hover:text-ink gap-2">
                <Coffee className="w-4 h-4" />
                Grab Coffee
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}