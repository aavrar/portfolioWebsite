"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, Coffee, Brain, Code2, BookOpen, ArrowDown } from "lucide-react"

export function V3Hero() {
  const [currentFocus, setCurrentFocus] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const focusAreas = [
    { 
      icon: Brain, 
      text: "AI & Natural Language Processing",
      description: "Building systems that understand and generate human language"
    },
    { 
      icon: Code2, 
      text: "Full-Stack Development",
      description: "End-to-end solutions from concept to deployment"
    },
    { 
      icon: BookOpen, 
      text: "Human-Computer Interaction",
      description: "Bridging the gap between technology and human experience"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentFocus((prev) => (prev + 1) % focusAreas.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [focusAreas.length])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Status Badge */}
        <div className="mb-6">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <Coffee className="w-4 h-4 mr-2" />
            Currently: Building AI-driven narratives & seeking opportunities
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            The Developer You Will 
          </span>
          <br />
          <span className="text-foreground">Regret Not Hiring</span>
        </h1>

        {/* Subtitle with rotating focus areas */}
        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Multidisciplinary developer specializing in
          </p>
          
          <div className="h-16 flex items-center justify-center">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 absolute ${
                    index === currentFocus 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-95'
                  }`}
                >
                  <div className="flex items-center gap-3 text-primary">
                    <Icon className="w-6 h-6" />
                    <span className="text-lg md:text-xl font-semibold">{area.text}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Personal Philosophy */}
        <blockquote className="text-lg md:text-xl text-muted-foreground italic mb-8 max-w-2xl mx-auto">
          "Building technology that doesn't just function, but communicates. 
          Systems that think like you do — or at least pretend to convincingly."
        </blockquote>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Coffee Consumed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Unique Perspective</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="gap-2"
            asChild
            aria-label="Download portfolio resume"
          >
            <a href="/resources/resume/resume.pdf" download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            asChild
            aria-label="Schedule interview call"
          >
            <a href="https://calendly.com/avakani_2026-depauw" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Schedule Interview
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Explore my work</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      {/* Running Code Animation */}
      <div className="absolute bottom-8 left-8 hidden lg:block opacity-30">
        <div className="font-mono text-xs text-muted-foreground">
          <div className="animate-pulse">
            <span className="text-blue-400">const</span> <span className="text-yellow-400">developer</span> = {"{"}
          </div>
          <div className="animate-pulse delay-300 ml-4">
            <span className="text-purple-400">name</span>: <span className="text-green-400">"Aahad"</span>,
          </div>
          <div className="animate-pulse delay-500 ml-4">
            <span className="text-purple-400">passion</span>: <span className="text-green-400">"Building the future"</span>
          </div>
          <div className="animate-pulse delay-700">
            {"}"}
          </div>
        </div>
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-1/3 right-12 hidden xl:block opacity-20">
        <div className="font-mono text-sm text-muted-foreground animate-bounce delay-1000">
          <span className="text-cyan-400">{"<AI>"}</span>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-24 hidden xl:block opacity-20">
        <div className="font-mono text-sm text-muted-foreground animate-bounce delay-1500">
          <span className="text-pink-400">function()</span>
        </div>
      </div>
    </section>
  )
}