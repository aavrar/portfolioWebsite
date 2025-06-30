"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, ExternalLink, Github } from "lucide-react"

const illuminatedProjects = [
  {
    title: "SwitchBoard Platform",
    subtitle: "Code-Switching Research Tool",
    illuminatedLetter: "S",
    description: "A web platform designed to collect and analyze code-switching examples across different languages and contexts. Built for linguistic research with data visualization and search capabilities.",
    technologies: ["React", "Next.js", "PostgreSQL", "TypeScript", "Supabase"],
    story: "What started as a class project became a functional research tool. Features include user submissions, filtering by language pairs, and basic analytics. Currently holds 200+ examples from beta users.",
    github: "https://github.com/aavrar/CodeBoard",
    status: "Phase 1 Complete",
    color: "#D4AF37",
    impact: "Used by 3 linguistics students for research papers"
  },
  {
    title: "Interactive Story Engine", 
    subtitle: "Procedural Narrative Generator",
    illuminatedLetter: "I",
    description: "A full-stack application that generates branching text adventures with AI-assisted storytelling. Players make choices that influence dynamically generated narratives.",
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "SQLite"],
    story: "Explores the intersection of AI and creative writing. The engine remembers player choices and adapts future story elements accordingly. Built as an exploration of procedural content generation.",
    github: "https://github.com/aavrar/interactive-story",
    demo: "https://interactive-story-zeta.vercel.app/",
    status: "Functional Demo",
    color: "#1B365D",
    impact: "50+ unique stories generated, 200+ player sessions"
  },
  {
    title: "WrestleStats",
    subtitle: "Wrestling Statistics Database",
    illuminatedLetter: "W", 
    description: "A web scraping and data visualization project that aggregates wrestling match data and presents it through an intuitive interface for fans and analysts.",
    technologies: ["React", "Node.js", "Cheerio", "Express", "Chart.js"],
    story: "Born from frustration with scattered wrestling statistics online. Scrapes data from multiple sources and presents unified wrestler profiles, match histories, and performance analytics.",
    github: "https://github.com/aavrar/wrestling-db",
    status: "Personal Project",
    color: "#D4AF37",
    impact: "Tracks 500+ wrestlers, 1000+ matches"
  }
]

export function IlluminatedProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section className="py-16">
      {/* Enhanced Chapter Header */}
      <div className="text-center mb-16">
        <div className="manuscript-border manuscript-page p-8 rounded-xl shadow-lg">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <h2 className="text-literary-heading text-4xl mb-4 text-ink">
              Chapter III: Selected Works
            </h2>
            <p className="text-lg text-literary italic text-ink/70 max-w-2xl mx-auto">
              A curated collection of projects that demonstrate the fusion of technical skill and creative problem-solving.
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Projects Grid */}
      <div className="grid gap-8 max-w-6xl mx-auto">
        {illuminatedProjects.map((project, index) => (
          <Card 
            key={index}
            className={`manuscript-border manuscript-page cursor-pointer transition-all duration-500 hover:shadow-2xl group ${
              selectedProject === index ? 'scale-[1.02] shadow-2xl' : 'hover:scale-[1.01]'
            }`}
            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
          >
            <CardHeader className="relative pb-4">
              {/* Enhanced Illuminated Letter */}
              <div 
                className={`absolute -top-4 -left-4 w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold text-literary-heading border-4 shadow-lg transition-all duration-500 group-hover:scale-110 ${
                  selectedProject === index ? 'illuminate-in' : ''
                }`}
                style={{ 
                  backgroundColor: project.color,
                  color: '#F7F3E9',
                  borderColor: '#1B365D',
                  boxShadow: `0 4px 20px ${project.color}40`
                }}
              >
                {project.illuminatedLetter}
              </div>
              
              <div className="ml-16 space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-literary-heading text-ink">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-ink/10 text-ink border-ink/20"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-literary italic text-ink/70 text-lg">
                  {project.subtitle}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Description */}
              <p className="text-literary leading-relaxed text-ink/80 text-lg">
                {project.description}
              </p>

              {/* Technology Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-ink/60 uppercase tracking-wide">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      className="bg-ink/90 text-parchment hover:bg-ink transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Impact */}
              <div className="bg-gold/10 border-l-4 border-gold p-4 rounded-r-lg">
                <p className="text-sm text-ink/70 italic">
                  <strong>Impact:</strong> {project.impact}
                </p>
              </div>

              {/* Expanded Details */}
              {selectedProject === index && (
                <div className="space-y-6 compile-in border-t border-gold/20 pt-6">
                  {/* Project Story */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-ink text-literary-heading">Development Story</h4>
                    <p className="text-literary text-ink/80 leading-relaxed italic">
                      {project.story}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline"
                      className="border-ink text-ink hover:bg-ink hover:text-parchment transition-colors"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button 
                        className="bg-ink hover:bg-ink/90 text-parchment"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Interaction Hint */}
              {selectedProject !== index && (
                <div className="text-center pt-4 border-t border-gold/20">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-ink/60 hover:text-ink transition-colors"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Click to explore details
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Closing Manuscript Note */}
      <div 
        className="mt-12 text-center manuscript-border p-6 rounded-lg"
        style={{ backgroundColor: 'var(--parchment)' }}
      >
        <p 
          className="text-literary italic"
          style={{ color: 'var(--ink)' }}
        >
          "Thus concludes this chapter of digital manuscripts. Each project a verse 
          in the epic poem of a developer's journey, where every line of code 
          is a stanza in the grand narrative of creation."
        </p>
        
        <div 
          className="mt-4 text-sm"
          style={{ color: 'var(--gold)' }}
        >
          — From the Chronicles of Aahad Vakani, Developer & Digital Poet
        </div>
      </div>
    </section>
  )
}