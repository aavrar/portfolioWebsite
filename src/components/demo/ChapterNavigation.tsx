"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, BookOpen, User, Zap, Rocket, Star } from "lucide-react"

const chapters = [
  { id: "prologue", title: "Prologue: The Story Begins", icon: BookOpen, section: "#hero" },
  { id: "origins", title: "Chapter I: Origins & Foundations", icon: User, section: "#origins" },
  { id: "development", title: "Chapter II: Character Development", icon: Zap, section: "#development" },
  { id: "adventures", title: "Chapter III: Epic Adventures", icon: Rocket, section: "#adventures" },
  { id: "epilogue", title: "Epilogue: What's Next", icon: Star, section: "#epilogue" }
]

export function ChapterNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <div className="fixed top-20 right-4 z-40">
      {/* Chapter Menu Toggle */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-12 h-12 p-0 shadow-lg"
        variant={isOpen ? "default" : "outline"}
      >
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Chapter List */}
      {isOpen && (
        <div className="absolute top-14 right-0 bg-background border rounded-lg shadow-xl p-2 min-w-64 animate-in slide-in-from-top-2">
          <div className="text-sm font-semibold p-2 border-b mb-2">
            📚 Story Navigation
          </div>
          
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => scrollToSection(chapter.section)}
              className="w-full text-left p-3 rounded-md hover:bg-muted transition-colors flex items-center gap-3"
            >
              <chapter.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{chapter.title}</span>
            </button>
          ))}
          
          <div className="border-t mt-2 pt-2">
            <div className="text-xs text-muted-foreground p-2">
              Use the story progress bar above to track your journey
            </div>
          </div>
        </div>
      )}
    </div>
  )
}