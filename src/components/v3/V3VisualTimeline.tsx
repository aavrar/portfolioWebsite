"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Code, 
  Lightbulb, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  Zap,
  Target,
  Users
} from "lucide-react"

interface TimelineEvent {
  id: string
  period: string
  year: string
  title: string
  mindset: string
  description: string
  projects: string[]
  keyLearning: string
  pivotMoment: string
  skills: string[]
  icon: React.ComponentType<any>
  color: string
  position: number
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "year1",
    period: "Year 1",
    year: "2023",
    title: "The Tutorial Follower",
    mindset: "Code first, ask questions later",
    description: "Started with basic web development, following tutorials and building simple projects without much consideration for real-world applications.",
    projects: ["Basic web apps", "Tutorial clones", "Static websites"],
    keyLearning: "Working code ≠ useful software",
    pivotMoment: "Built a complex todo app that nobody wanted to use - realized technical complexity doesn't equal value",
    skills: ["HTML/CSS", "Basic JavaScript", "Git basics"],
    icon: BookOpen,
    color: "#ef4444",
    position: 0
  },
  {
    id: "year2",
    period: "Year 2", 
    year: "2024",
    title: "The Problem Solver",
    mindset: "User needs drive technical decisions",
    description: "Shifted focus to solving real problems for real people. Started talking to users before building and iterating based on feedback.",
    projects: ["SwitchBoard platform", "Research tools", "Data collection systems"],
    keyLearning: "Simple solutions often beat complex ones",
    pivotMoment: "Professor said 'just give me a CSV export' after I built fancy charts - learned to solve the actual problem",
    skills: ["React/Next.js", "Database design", "User research", "API development"],
    icon: Target,
    color: "#f97316",
    position: 1
  },
  {
    id: "current",
    period: "Current",
    year: "2025", 
    title: "The Ship-Fast Builder",
    mindset: "Ship fast, learn faster",
    description: "Focus on rapid iteration and real-world impact. Building tools that people actually use while maintaining technical quality.",
    projects: ["AI integrations", "Full-stack platforms", "Production applications"],
    keyLearning: "Technical depth matters, but shipping matters more",
    pivotMoment: "Realized my side projects had more impact than perfect class assignments - now I prioritize real-world value",
    skills: ["AI integration", "System design", "Performance optimization", "Production deployment"],
    icon: Zap,
    color: "#10b981",
    position: 2
  }
]

const milestones = [
  { date: "Jan 2023", event: "First lines of code", type: "start" },
  { date: "Mar 2023", event: "First deployed website", type: "achievement" },
  { date: "Aug 2023", event: "Started computer science program", type: "education" },
  { date: "Jan 2024", event: "Built first real project (SwitchBoard)", type: "project" },
  { date: "Jun 2024", event: "First project used in research", type: "impact" },
  { date: "Sep 2024", event: "Integrated AI into applications", type: "skill" },
  { date: "Dec 2024", event: "Portfolio v3 - professional quality", type: "achievement" },
  { date: "Jan 2025", event: "Building production-ready systems", type: "current" }
]

export function V3VisualTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<string>("year2")
  const [animationComplete, setAnimationComplete] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const selectedData = timelineEvents.find(e => e.id === selectedEvent) || timelineEvents[1]

  return (
    <div className="space-y-12">
      {/* Main Timeline Visualization */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Evolution as a Developer
          </CardTitle>
          <CardDescription>
            My journey from tutorial follower to problem solver - an honest look at growth over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline Track */}
            <div className="relative h-32 mb-8">
              {/* Background track */}
              <div className="absolute top-16 left-8 right-8 h-1 bg-gradient-to-r from-red-200 via-orange-200 to-green-200 rounded-full" />
              
              {/* Progress indicator */}
              <div 
                className={`absolute top-16 left-8 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full transition-all duration-2000 ease-out ${
                  animationComplete ? 'right-8' : 'right-full'
                }`}
              />

              {/* Timeline nodes */}
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                const isSelected = selectedEvent === event.id
                const leftPercent = 8 + (index * 42) // Distribute evenly across timeline
                
                return (
                  <div
                    key={event.id}
                    className={`absolute top-8 cursor-pointer transition-all duration-300 ${
                      isSelected ? 'scale-110 z-10' : 'scale-100'
                    }`}
                    style={{ left: `${leftPercent}%`, transform: 'translateX(-50%)' }}
                    onClick={() => setSelectedEvent(event.id)}
                  >
                    {/* Node circle */}
                    <div 
                      className={`w-16 h-16 rounded-full border-4 border-background shadow-lg flex items-center justify-center transition-all duration-300 ${
                        isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: event.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Label */}
                    <div className="text-center mt-2">
                      <div className="font-semibold text-sm">{event.period}</div>
                      <div className="text-xs text-muted-foreground">{event.year}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Selected Event Details */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: selectedData.color + '20' }}
                  >
                    <selectedData.icon 
                      className="w-6 h-6" 
                      style={{ color: selectedData.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedData.title}</h3>
                    <p className="text-muted-foreground italic">"{selectedData.mindset}"</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedData.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Projects During This Period:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedData.projects.map((project, index) => (
                        <Badge key={index} variant="outline">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Learning & Pivot */}
              <div className="space-y-4">
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2 text-green-700 dark:text-green-300">
                      <Lightbulb className="w-4 h-4" />
                      Key Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      {selectedData.keyLearning}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 dark:border-blue-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <Zap className="w-4 h-4" />
                      Pivot Moment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      {selectedData.pivotMoment}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Detailed Timeline & Milestones
          </CardTitle>
          <CardDescription>
            Key events and achievements along the development journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const getMilestoneColor = (type: string) => {
                switch (type) {
                  case 'start': return 'bg-gray-100 text-gray-700 border-gray-300'
                  case 'education': return 'bg-blue-100 text-blue-700 border-blue-300'
                  case 'project': return 'bg-green-100 text-green-700 border-green-300'
                  case 'achievement': return 'bg-purple-100 text-purple-700 border-purple-300'
                  case 'impact': return 'bg-orange-100 text-orange-700 border-orange-300'
                  case 'skill': return 'bg-cyan-100 text-cyan-700 border-cyan-300'
                  case 'current': return 'bg-yellow-100 text-yellow-700 border-yellow-300'
                  default: return 'bg-gray-100 text-gray-700 border-gray-300'
                }
              }

              return (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className={`${getMilestoneColor(milestone.type)} font-mono text-xs`}>
                      {milestone.date}
                    </Badge>
                  </div>
                  <div className="flex-grow">
                    <span className="text-sm">{milestone.event}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Current Status */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <Users className="w-5 h-5" />
            Where I Am Now
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Current Focus</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  Building production-ready applications with real impact
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  Integrating AI thoughtfully into user experiences
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  Solving real problems for real users
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">What's Next</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  Contributing to larger, collaborative projects
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  Learning system design and scalability
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  Mentoring other developers starting their journey
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}