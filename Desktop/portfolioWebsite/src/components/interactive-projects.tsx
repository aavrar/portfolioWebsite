"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Procedural Story Adventure Engine",
    category: "Full-Stack",
    technologies: ["React","FastAPI","Python","Pydantic","Modern CSS","Uvicorn","HuggingFace Transformers","OpenAI","Axios"],
    image: "/resources/images/interactiveStory.png",
    shortDescription: "A browser-based, procedurally generated text adventure where every playthrough is a fresh world.",
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
    id: 2,
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
  }
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
