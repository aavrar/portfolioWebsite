"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Play, Pause } from "lucide-react"

export function StoryHero() {
  const [currentScene, setCurrentScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const scenes = [
    {
      title: "From Curiosity to Code",
      subtitle: "A journey through Computer Science and Creative Writing",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      year: "2022"
    },
    {
      title: "Building Real Solutions",
      subtitle: "Full-stack development meets practical problem-solving",
      background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      year: "2023"
    },
    {
      title: "Ready for What's Next",
      subtitle: "Seeking opportunities to grow and contribute",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      year: "2025"
    }
  ]

  useEffect(() => {
    if (!isPlaying) return
    
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isPlaying, scenes.length])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ background: scenes[currentScene].background }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Enhanced Content */}
      <div className="relative z-10 text-center text-white max-w-5xl px-6">
        {/* Year Badge */}
        <div className="mb-6">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-lg font-semibold border border-white/30">
            {scenes[currentScene].year}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 leading-tight">
          {scenes[currentScene].title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 transition-all duration-700 opacity-90 max-w-3xl mx-auto leading-relaxed">
          {scenes[currentScene].subtitle}
        </p>
        
        {/* Enhanced Story Controls */}
        <div className="space-y-8">
          <div className="text-lg mb-8">
            <span className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              Chapter {currentScene + 1} of {scenes.length}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
              size="lg"
              className="bg-white/15 backdrop-blur border-white/30 text-white hover:bg-white/25 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Story' : 'Continue Story'}
            </Button>
            
            <Button
              onClick={() => document.querySelector('#development')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white/90 text-gray-900 hover:bg-white transition-all duration-300 font-semibold px-8"
            >
              Begin Journey
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Enhanced Scene Indicators */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {scenes.map((scene, index) => (
            <button
              key={index}
              onClick={() => setCurrentScene(index)}
              className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                index === currentScene ? 'scale-110' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentScene ? 'bg-white shadow-lg' : 'bg-white/50'
              }`} />
              <span className="text-xs font-medium">{scene.year}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  )
}