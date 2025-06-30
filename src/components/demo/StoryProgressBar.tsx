"use client"

import { useState, useEffect } from "react"

const storyBeats = [
  { id: "prologue", title: "Prologue", emoji: "📖" },
  { id: "origins", title: "Origins", emoji: "🌱" },
  { id: "development", title: "Character Development", emoji: "⚡" },
  { id: "adventures", title: "Epic Adventures", emoji: "🚀" },
  { id: "epilogue", title: "Epilogue", emoji: "🎭" }
]

export function StoryProgressBar() {
  const [currentBeat, setCurrentBeat] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      
      // Update current story beat based on scroll position
      const beatIndex = Math.floor((progress / 100) * storyBeats.length)
      setCurrentBeat(Math.min(beatIndex, storyBeats.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3">
        {/* Story Progress */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold">
            {storyBeats[currentBeat]?.emoji} {storyBeats[currentBeat]?.title}
          </div>
          <div className="text-xs text-muted-foreground">
            {Math.round(scrollProgress)}% Complete
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
          
          {/* Story Beat Markers */}
          <div className="absolute inset-0 flex justify-between items-center px-1">
            {storyBeats.map((beat, index) => (
              <div
                key={beat.id}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index <= currentBeat 
                    ? 'bg-primary border-primary scale-110' 
                    : 'bg-background border-muted-foreground'
                }`}
                title={beat.title}
              />
            ))}
          </div>
        </div>
        
        {/* Story Beat Labels */}
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          {storyBeats.map((beat, index) => (
            <span 
              key={beat.id}
              className={`transition-colors duration-300 ${
                index <= currentBeat ? 'text-primary font-medium' : ''
              }`}
            >
              {beat.emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}