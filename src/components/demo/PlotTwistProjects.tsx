"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Github, ExternalLink, Lightbulb, Zap } from "lucide-react"

const epicProjects = [
  {
    title: "SwitchBoard Research Platform",
    subtitle: "Code-Switching Data Collection",
    plotTwist: "What started as a class assignment became a functional research tool used by actual linguistics students.",
    problem: "Academic research on code-switching lacked a centralized platform for data collection and analysis.",
    solution: "Built a web application that allows researchers to submit, categorize, and analyze code-switching examples with basic filtering and search capabilities.",
    impact: "Collected 200+ examples and helped 3 students complete research papers on multilingual communication patterns.",
    technologies: ["React", "Next.js", "PostgreSQL", "Supabase"],
    status: "completed",
    github: "https://github.com/aavrar/CodeBoard",
    dramatic: "The first time a professor mentioned using it as an example in their linguistics course."
  },
  {
    title: "Interactive Story Generator", 
    subtitle: "AI-Powered Narrative Engine",
    plotTwist: "A simple text adventure became an exploration of how AI can enhance, not replace, creative storytelling.",
    problem: "Most interactive fiction is linear. Could AI create truly dynamic, player-responsive narratives?",
    solution: "Built a system that uses AI to generate story content while maintaining narrative coherence and player agency through structured prompting and state management.",
    impact: "Generated 50+ unique story paths with 200+ player sessions, demonstrating AI's potential in interactive media.",
    technologies: ["Python", "FastAPI", "React", "OpenAI API"],
    status: "completed",
    github: "https://github.com/aavrar/interactive-story",
    demo: "https://interactive-story-zeta.vercel.app/",
    dramatic: "The moment when a player said the AI's story adaptation felt 'surprisingly human' in responding to their choices."
  },
  {
    title: "WrestleStats Database",
    subtitle: "Wrestling Data Aggregation", 
    plotTwist: "A personal project to solve my own problem became a useful tool for fellow wrestling fans and fantasy bookers.",
    problem: "Wrestling statistics were scattered across multiple websites with inconsistent formatting and missing data.",
    solution: "Created a web scraping system that aggregates wrestler data, match results, and championship histories into a searchable, unified database.",
    impact: "Tracks 500+ wrestlers and 1000+ matches, used by wrestling forums and fantasy booking communities.",
    technologies: ["React", "Node.js", "Web Scraping", "Express"],
    status: "completed", 
    github: "https://github.com/aavrar/wrestling-db",
    dramatic: "When someone on a wrestling forum said 'finally, accurate data in one place' - exactly what I had hoped to achieve."
  }
]

export function PlotTwistProjects() {
  const [revealedProjects, setRevealedProjects] = useState<number[]>([])

  const revealProject = (index: number) => {
    if (revealedProjects.includes(index)) {
      setRevealedProjects(prev => prev.filter(i => i !== index))
    } else {
      setRevealedProjects(prev => [...prev, index])
    }
  }

  return (
    <section id="adventures" className="py-24">
      <div className="container mx-auto px-4">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Epic Adventures</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plot Twists & Epic Quests
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every great story has unexpected turns. These projects started as simple ideas 
            but evolved into something extraordinary. Click to reveal the plot twists...
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {epicProjects.map((project, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Mysterious Overlay */}
              {!revealedProjects.includes(index) && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 flex items-center justify-center">
                  <Button
                    onClick={() => revealProject(index)}
                    size="lg"
                    className="bg-primary/90 hover:bg-primary text-white"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Reveal the Plot Twist
                  </Button>
                </div>
              )}

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-yellow-500" />
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                  
                  {revealedProjects.includes(index) && (
                    <Button
                      onClick={() => revealProject(index)}
                      variant="ghost"
                      size="sm"
                    >
                      <EyeOff className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Basic Info (Always Visible) */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Plot Twist Content (Revealed) */}
                {revealedProjects.includes(index) && (
                  <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                    {/* The Plot Twist */}
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-500" />
                        The Plot Twist
                      </h4>
                      <p className="text-lg italic">{project.plotTwist}</p>
                    </div>

                    {/* The Story Arc */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2 text-red-600">The Problem</h5>
                        <p className="text-sm">{project.problem}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-600">The Solution</h5>
                        <p className="text-sm">{project.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-green-600">The Impact</h5>
                        <p className="text-sm">{project.impact}</p>
                      </div>
                    </div>

                    {/* The Dramatic Moment */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        🎭 The Dramatic Moment
                      </h5>
                      <p className="italic">{project.dramatic}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      
                      {project.demo && (
                        <Button variant="outline" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Experience Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chapter Conclusion */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">End of Chapter III</h3>
          <p className="text-lg text-muted-foreground mb-6">
            "Every project taught something new. Every challenge became an opportunity. 
            Every line of code was a step toward mastery."
          </p>
          <div className="text-sm text-muted-foreground">
            — The Developer's Journey continues...
          </div>
        </div>
      </div>
    </section>
  )
}