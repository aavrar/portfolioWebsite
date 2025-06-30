"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, GitBranch, TrendingUp, ArrowRight, Clock, CheckCircle } from "lucide-react"

interface FlowStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  time: string
  activities: string[]
  color: string
  position: { x: number; y: number }
}

const developmentFlow: FlowStep[] = [
  {
    id: "research",
    title: "Research & Planning",
    description: "Understand the problem before writing code",
    icon: Target,
    time: "25%",
    activities: ["Talk to users", "Study existing solutions", "Define success metrics", "Prototype interactions"],
    color: "#3b82f6",
    position: { x: 50, y: 100 }
  },
  {
    id: "development",
    title: "Iterative Development",
    description: "Build in small, testable increments",
    icon: GitBranch,
    time: "50%",
    activities: ["Feature flags", "Regular feedback", "Automated testing", "Living documentation"],
    color: "#10b981",
    position: { x: 300, y: 100 }
  },
  {
    id: "validation",
    title: "Validation & Learning",
    description: "Measure impact and iterate based on data",
    icon: TrendingUp,
    time: "25%",
    activities: ["Track metrics", "Post-mortems", "Document lessons", "Share knowledge"],
    color: "#8b5cf6",
    position: { x: 550, y: 100 }
  }
]

const projectTimeline = [
  {
    project: "SwitchBoard",
    phases: [
      { name: "Basic CRUD", weeks: "1-2", color: "#ef4444" },
      { name: "Search/Filter", weeks: "3-4", color: "#f97316" },
      { name: "Polish & Testing", weeks: "5-6", color: "#10b981" }
    ]
  },
  {
    project: "Story Engine",
    phases: [
      { name: "Core Engine", weeks: "1-4", color: "#3b82f6" },
      { name: "Frontend & Polish", weeks: "5-8", color: "#8b5cf6" }
    ]
  },
  {
    project: "WrestleStats",
    phases: [
      { name: "Scraper Logic", weeks: "1-3", color: "#06b6d4" },
      { name: "Frontend & Optimization", weeks: "4-6", color: "#84cc16" }
    ]
  }
]

export function V3ProcessFlowDiagram() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <div className="space-y-12">
      {/* Development Methodology Flow */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5" />
            Development Methodology Flow
          </CardTitle>
          <CardDescription>
            Interactive diagram showing how I approach every project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 bg-gradient-to-br from-muted/20 to-background rounded-lg border p-8">
            <svg className="absolute inset-0 w-full h-full">
              {/* Connection Lines */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="currentColor"
                    className="text-primary"
                  />
                </marker>
              </defs>
              
              {/* Flow Arrows */}
              <path
                d="M 180 140 Q 220 140 240 140"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary opacity-60"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 430 140 Q 470 140 490 140"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary opacity-60"
                markerEnd="url(#arrowhead)"
              />
              
              {/* Curved feedback loop */}
              <path
                d="M 550 180 Q 400 250 100 180"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="text-muted-foreground opacity-40"
                markerEnd="url(#arrowhead)"
              />
            </svg>

            {/* Flow Steps */}
            {developmentFlow.map((step) => {
              const Icon = step.icon
              const isHovered = hoveredStep === step.id
              
              return (
                <div
                  key={step.id}
                  className={`absolute transition-all duration-300 ${
                    isHovered ? 'scale-105 z-10' : 'scale-100'
                  }`}
                  style={{
                    left: step.position.x,
                    top: step.position.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={`relative bg-background border-2 rounded-lg p-4 shadow-lg max-w-48 ${
                    isHovered ? 'border-primary shadow-xl' : 'border-border'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon 
                          className="w-4 h-4" 
                          style={{ color: step.color }}
                        />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {step.description}
                    </p>
                    
                    {isHovered && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-popover border rounded-lg p-3 shadow-lg z-20 w-56">
                        <h5 className="font-medium text-sm mb-2">Key Activities:</h5>
                        <ul className="space-y-1">
                          {step.activities.map((activity, index) => (
                            <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
            
            {/* Feedback Loop Label */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Badge variant="secondary" className="text-xs">
                Continuous Feedback Loop
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Timeline Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Project Timeline Breakdown
          </CardTitle>
          <CardDescription>
            Real development phases and time allocation for each project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {projectTimeline.map((project, projectIndex) => (
              <div key={projectIndex} className="space-y-4">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{project.project}</h4>
                  <Badge variant="outline" className="text-xs">
                    {project.phases.length} phases
                  </Badge>
                </div>
                
                <div className="relative">
                  {/* Timeline Track */}
                  <div className="h-8 bg-muted/30 rounded-lg relative overflow-hidden">
                    {project.phases.map((phase, phaseIndex) => {
                      const startPercent = (phaseIndex / project.phases.length) * 100
                      const widthPercent = 100 / project.phases.length
                      
                      return (
                        <div
                          key={phaseIndex}
                          className="absolute top-0 h-full rounded transition-all duration-300 hover:opacity-80"
                          style={{
                            left: `${startPercent}%`,
                            width: `${widthPercent}%`,
                            backgroundColor: phase.color + '40',
                            borderLeft: `3px solid ${phase.color}`
                          }}
                        >
                          <div className="p-2 h-full flex items-center">
                            <span className="text-xs font-medium text-foreground">
                              {phase.name}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Phase Labels */}
                  <div className="flex justify-between mt-2">
                    {project.phases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="text-center flex-1">
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                          style={{ backgroundColor: phase.color + '20' }}
                        >
                          {phase.weeks}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}