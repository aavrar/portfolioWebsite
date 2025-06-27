"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { on } from "events"

const projects = [
  {
    id: 1,
    title: "SwitchBoard - Code-Switching Corpus Platform",
    category: "Full-Stack",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Supabase",
      "Tailwind CSS",
      "Radix UI",
      "Recharts"
    ],
    image: "/resources/images/switchBoard.png",
    shortDescription: `Estimated time before a working demo: 2 weeks.
    A community-driven platform for collecting, analyzing, and sharing code-switching examples across multiple languages, providing comprehensive analytics for linguistic research.`,
    problem:
      "Linguists and researchers lacked a centralized platform to collect, analyze, and share real-world code-switching examples. Existing tools were either academic-only, language-specific, or didn't provide comprehensive analytics for multilingual communication patterns.",
    solution:
      "Built a full-stack web application with a Next.js frontend and Express.js backend that enables users to submit code-switching examples with contextual metadata, search and filter existing examples, and view detailed analytics through interactive dashboards showing language pair statistics, platform distribution, and regional trends.",
    results: [
      "Complete RESTful API with search, filtering, and analytics endpoints",
      "Interactive dashboard with real-time charts showing language pair trends",
      "Comprehensive example submission system with metadata collection",
      "Advanced search functionality across text content and contextual data",
      "Analytics for platform distribution, regional analysis, and time-based trends",
      "Responsive design optimized for both desktop and mobile research workflows",
      "Extensible database schema supporting any language combination"
    ],
    teamSize: "Solo project",
    duration: "1.5 months",
    status: "✅ Completed (Phase 1 of 3)",
    currentState: "Fully functional backend API with complete frontend UI. All core features implemented including data submission, search, filtering. Analytics dashboard is still buggy.",
    plannedFeatures: [
      "User authentication and authorization system",
      "Advanced linguistic annotations and tagging",
      "Export functionality for research data (CSV, JSON, XML)",
      "Machine learning integration for automatic language detection",
      "Collaborative annotation features for research teams",
      "Integration with external linguistic databases",
      "Real-time collaboration tools and notifications",
      "Advanced data visualization and reporting tools"
    ],
    githubUrl: "https://github.com/aavrar/CodeBoard",
  },
  {
    id: 2,
    title: "Procedural Story Adventure Engine",
    category: "Full-Stack",
    technologies: ["React","FastAPI","Python","Pydantic","Modern CSS","Uvicorn","HuggingFace Transformers","OpenAI","Axios"],
    image: "/resources/images/interactiveStory.png",
    shortDescription: `Estimated time before a working demo: 2 weeks.
A browser-based, procedurally generated text adventure where every playthrough is a fresh world.`,
    problem:
      "Players needed an engaging, procedurally generated text adventure with dynamic maps, AI-powered NPCs, and fuzzy command matching.",
    solution:
      "Built a browser-based, procedurally generated text adventure with dynamic maps, AI-powered NPCs, and fuzzy command matching.",
    results: [
      "Every playthrough is a fresh world",
      "Players can save and load their progress",
      "Players can explore a dynamic map",
      "Players can interact with AI-powered NPCs",
    ],
    teamSize: "Solo project",
    duration: "2 months",
    githubUrl: "https://github.com/aavrar/interactive-story",
    liveUrl: "https://interactive-story-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "WrestleStats: Pro Stats & Profiles",
    category: "Full-Stack",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Axios",
      "Cheerio",
      "Tailwind CSS",
      "Lucide Icons"
    ],
    image: "/resources/images/wrestleStats.png",
    shortDescription: "A slick web app for wrestling fans to search, stalk, and analyze their favorite grapplers’ stats, matches, and title reigns—straight from CageMatch.",
    problem:
      "Wrestling fans wanted a quick, no-nonsense way to check up-to-date stats, match histories, and title runs for any pro wrestler, without wading through clunky forums or outdated fan sites.",
    solution:
      "Developed a full-stack app that scrapes live data from CageMatch, lets users search for any wrestler, view detailed stats, recent matches, and championship history—all wrapped in a modern, mobile-friendly UI.",
    results: [
      "Instant search and detailed profiles for thousands of wrestlers",
      "Dynamic recent matches and win/loss breakdowns",
      "Championship history with reign durations",
      "Slick, responsive UI that’s easier to use than a folding chair at ringside"
    ],
    teamSize: "Solo project",
    duration: "1.5 months",
    githubUrl: "https://github.com/aavrar/wrestling-db",
  },
  {
    id: 4,
    title: "AI Writing Assistant",
    category: "Full-Stack",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Axios",
      "Cheerio",
      "Tailwind CSS",
      "Lucide Icons"
    ],
    image: "/resources/images/betterGrammar.png",
    shortDescription: "An intelligent writing companion that provides real-time grammar checking, AI-powered rewrites, tone adjustments, and text summarization—like Grammarly but with more AI superpowers.",
    problem:
      "Writers needed a comprehensive tool that goes beyond basic grammar checking to offer contextual AI suggestions, tone adjustments, and intelligent rewrites without relying on expensive premium services.",
    solution:
      "Built a Next.js writing assistant that integrates multiple AI services: LanguageTool for grammar checking, Hugging Face models for text rewriting and summarization, with a clean interface featuring floating toolbars, suggestion sidebars, and real-time scoring.",
    results: [
      "Real-time grammar and clarity scoring with visual feedback",
      "AI-powered text rewriting with customizable tone options (professional, casual, confident, etc.)",
      "Intelligent text summarization for long content",
      "Floating toolbar for quick text actions on selected content",
      "Undo/redo functionality with edit history tracking",
      "Responsive design with mobile-friendly suggestion panels"
    ],
    teamSize: "Solo project",
    duration: "1.5 months",
    status: "🚧 In Development",
    currentState: "AI features are semi-functional with basic rewriting and summarization working. Grammar checking and clarity scoring are operational.",
    plannedFeatures: [
      "Enhanced AI model integration for better text generation",
      "Document templates and writing workflows",
      "Export functionality (PDF, Word, etc.)",
      "Collaboration features and sharing",
      "Writing analytics and progress tracking",
      "Plugin system for additional AI models",
      "Offline mode with local processing"
    ],
    githubUrl: "https://github.com/aavrar/grammarly-better",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend"]

export function InteractiveProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="transition-all duration-200"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-lg object-cover w-full group-hover:scale-105 transition-transform duration-300"
              />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={project.githubUrl} className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                    {project.liveUrl && (
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={project.liveUrl} className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  </div>
                </div>

                <CardDescription>{project.shortDescription}</CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.teamSize}</span>
                  <span>{project.duration}</span>
                </div>

                {/* Expandable Details */}
                {expandedProject === project.id && (
                  <div className="space-y-4 pt-4 border-t animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <h4 className="font-semibold mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.status && (
                      <div>
                        <h4 className="font-semibold mb-2">Status</h4>
                        <p className="text-sm text-muted-foreground">{project.status}</p>
                      </div>
                    )}

                    {project.currentState && (
                      <div>
                        <h4 className="font-semibold mb-2">Current State</h4>
                        <p className="text-sm text-muted-foreground">{project.currentState}</p>
                      </div>
                    )}

                    {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Planned Features</h4>
                        <ul className="space-y-1">
                          {project.plannedFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {/* {project.caseStudyUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <Link href={project.caseStudyUrl}>
                        <Download className="h-4 w-4" />
                        Download Case Study
                      </Link>
                    </Button>
                  )} */}
                  </div>
                )}

                <Button variant="ghost" onClick={() => toggleExpanded(project.id)} className="w-full gap-2">
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      View Details
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
