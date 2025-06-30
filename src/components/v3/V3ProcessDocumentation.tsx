"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Target, 
  GitBranch, 
  AlertTriangle, 
  Lightbulb, 
  Clock, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  XCircle,
  RefreshCw,
  BarChart3,
  Activity
} from "lucide-react"
import { V3ProcessFlowDiagram } from "./V3ProcessFlowDiagram"
import { V3BeforeAfterComparison } from "./V3BeforeAfterComparison"
import { V3VisualTimeline } from "./V3VisualTimeline"
import { V3MicroInteractions } from "./V3MicroInteractions"

const methodologySteps = [
  {
    phase: "Research & Planning",
    icon: Target,
    description: "Understand the problem before writing code",
    practices: [
      "Talk to actual users (not just assumptions)",
      "Study existing solutions and their failures", 
      "Define success metrics upfront",
      "Prototype key interactions first"
    ],
    timeAllocation: "25%"
  },
  {
    phase: "Iterative Development", 
    icon: GitBranch,
    description: "Build in small, testable increments",
    practices: [
      "Feature flags for safe deployments",
      "Regular user feedback sessions",
      "Automated testing from day one",
      "Documentation as code evolves"
    ],
    timeAllocation: "50%"
  },
  {
    phase: "Validation & Learning",
    icon: TrendingUp, 
    description: "Measure impact and iterate based on data",
    practices: [
      "Track real usage metrics",
      "Conduct post-mortems on failures",
      "Document lessons learned",
      "Share knowledge with team"
    ],
    timeAllocation: "25%"
  }
]

const realFailures = [
  {
    project: "SwitchBoard v1",
    title: "Over-engineered Data Models",
    problem: "Built complex ML classification before users even needed basic search",
    impact: "3 weeks of wasted development time",
    lesson: "Users wanted simple data entry and export, not fancy AI analysis",
    solution: "Stripped back to core CRUD operations, added ML as optional enhancement",
    outcome: "Finally got working product that people actually used",
    tags: ["Scope Creep", "User Research"]
  },
  {
    project: "Story Engine",
    title: "API Cost Explosion", 
    problem: "Didn't account for OpenAI API costs scaling with user interactions",
    impact: "$200 unexpected bill in first week of demo",
    lesson: "Always implement usage limits and cost monitoring from the start",
    solution: "Added request caching, user quotas, and cost alerts",
    outcome: "Sustainable demo that runs within budget",
    tags: ["Cost Management", "Planning"]
  },
  {
    project: "Portfolio v2",
    title: "Animation Overload",
    problem: "Added flashy animations everywhere thinking it showed technical skill",
    impact: "Users complained about motion sickness and slow loading",
    lesson: "Animations should enhance usability, not showcase ability",
    solution: "Reduced to subtle, purposeful animations with respect for motion preferences",
    outcome: "Better accessibility and user experience",
    tags: ["UX Design", "Accessibility"]
  }
]

const learningEvolution = [
  {
    period: "Year 1 (2023)",
    mindset: "Code first, ask questions later",
    projects: ["Basic web apps", "Tutorial following"],
    keyLearning: "Working code ≠ useful software",
    pivotMoment: "Built a complex todo app nobody wanted to use"
  },
  {
    period: "Year 2 (2024)",
    mindset: "User needs drive technical decisions", 
    projects: ["SwitchBoard", "Research tools"],
    keyLearning: "Simple solutions often beat complex ones",
    pivotMoment: "Professor said 'just give me a CSV export' after I built fancy charts"
  },
  {
    period: "Current (2025)",
    mindset: "Ship fast, learn faster",
    projects: ["AI integrations", "Full-stack platforms"],
    keyLearning: "Technical depth matters, but shipping matters more",
    pivotMoment: "Realized my side projects had more impact than perfect class assignments"
  }
]

export function V3ProcessDocumentation() {
  const [selectedFailure, setSelectedFailure] = useState(0)
  const failure = realFailures[selectedFailure]

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How I Actually Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real development process, honest failures, and what I've learned from 
            building things that people actually use (and don't use).
          </p>
        </div>

        {/* Enhanced Content with Tabs */}
        <Tabs defaultValue="methodology" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            <TabsTrigger value="methodology" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Methodology</span>
            </TabsTrigger>
            <TabsTrigger value="flowcharts" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="hidden sm:inline">Process Flow</span>
            </TabsTrigger>
            <TabsTrigger value="failures" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Before/After</span>
            </TabsTrigger>
            <TabsTrigger value="evolution" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Evolution</span>
            </TabsTrigger>
            <TabsTrigger value="interactions" className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              <span className="hidden sm:inline">UX Details</span>
            </TabsTrigger>
          </TabsList>

          {/* Development Methodology */}
          <TabsContent value="methodology" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {methodologySteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline">{step.timeAllocation}</Badge>
                      </div>
                      <CardTitle>{step.phase}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.practices.map((practice, practiceIndex) => (
                          <li key={practiceIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    {/* Arrow to next step */}
                    {index < methodologySteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Process Flow Diagrams */}
          <TabsContent value="flowcharts" className="space-y-8">
            <V3ProcessFlowDiagram />
          </TabsContent>

          {/* Before/After Comparisons */}
          <TabsContent value="failures" className="space-y-8">
            <V3BeforeAfterComparison />
          </TabsContent>

          {/* Visual Timeline */}
          <TabsContent value="evolution" className="space-y-8">
            <V3VisualTimeline />
          </TabsContent>

          {/* Micro-Interactions */}
          <TabsContent value="interactions" className="space-y-8">
            <V3MicroInteractions />
          </TabsContent>
        </Tabs>

        {/* Current Philosophy */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mt-12">
          <CardHeader>
            <CardTitle className="text-center">Current Development Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">User-Centric</h4>
                <p className="text-sm text-muted-foreground">
                  Build for people, not for your portfolio. 
                  If users don't find value, the code is worthless.
                </p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Ship & Iterate</h4>
                <p className="text-sm text-muted-foreground">
                  Perfect is the enemy of done. 
                  Get feedback early and often.
                </p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Sustainable Code</h4>
                <p className="text-sm text-muted-foreground">
                  Write code that future you (and your teammates) 
                  will thank you for.
                </p>
              </div>
            </div>
            
            <blockquote className="text-center text-lg italic text-muted-foreground border-t pt-6">
              "The best code is code that solves real problems for real people. 
              Everything else is just intellectual masturbation."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}